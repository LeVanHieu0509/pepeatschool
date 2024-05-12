import React, { useState, useEffect, useContext } from "react";
import Wenb3Modal from "web3modal";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import axios from "axios";

//INTERNAL  IMPORT
import {
  NFTMarketplaceAddress,
  NFTMarketplaceABI,
  TransferFundsAddress,
  TransferFundsABI,
  providerUrl,
} from "./constants";
import { pinFileToIPFS, uploadMetadata } from "./pinata";

//---FETCHING SMART CONTRACT
// It may be read from when it is connected to a Provider or state-changing operations can be called when connected to a Signer.
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
  );

//---CONNECTING WITH SMART CONTRACT

const connectingWithSmartContract = async () => {
  try {
    const web3Modal = new Wenb3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection); //Provider is a read-only connection to the blockchain, which allows querying the blockchain state

    const signer = provider.getSigner(); //A Signer wraps all operations that interact with an account
    //can be used to sign a variety of types of payloads.

    const contract = fetchContract(signer);

    // Call function in Smart Contract
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with contract");
  }
};

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = ({ children }) => {
  const titleData = "Discover, collect, and sell NFTs";

  //------USESTAT
  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const router = useRouter();
  const [accountBalance, setAccountBalance] = useState();

  //---CHECK IF WALLET IS CONNECTD
  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        setError("No Account Found");
        setOpenError(true);
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const getBalance = await provider.getBalance(accounts[0]);

      const bal = ethers.utils.formatEther(getBalance); // Get the current balance of an account (by address or ENS name)

      setAccountBalance(bal);
    } catch (error) {
      setError("Something wrong while connecting to wallet");
      console.log(error);
      setOpenError(true);
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  //---CONNET WALLET FUNCTION
  const connectWallet = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      // window.location.reload();
    } catch (error) {
      setError("Error while connecting to wallet");
      setOpenError(true);
    }
  };

  //---UPLOAD TO IPFS FUNCTION
  const uploadToIPFS = async (file) => {
    const data = { name: file.name };
    const { IpfsHash, PinSize, Timestamp } =
      (await pinFileToIPFS(file, data)) ?? {};

    return IpfsHash;
  };

  //---CREATENFT FUNCTION
  const createNFT = async (name, price, IpfsHash, description) => {
    if (!name || !description || !price || !IpfsHash)
      return setError("Data Is Missing"), setOpenError(true);

    const data = JSON.stringify({
      pinataContent: {
        name: name,
        description: description,
        external_url: "https://pinata.cloud",
        image: IpfsHash,
      },
      pinataMetadata: {
        name: name,
        price,
        description,
      },
    });

    console.log(data);
    try {
      const added = await uploadMetadata(data);

      const url = `https://turquoise-obliged-centipede-803.mypinata.cloud/ipfs/${added}`;

      await createSale(url, price);
      router.push("/searchPage");
    } catch (error) {
      console.log("createNFT", error);
      setError("Error while creating NFT");
      setOpenError(true);
    }
  };

  //--- createSale FUNCTION
  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      console.log(url, formInputPrice, isReselling, id);
      const price = ethers.utils.parseUnits(formInputPrice, "ether"); //convert price

      const contract = await connectingWithSmartContract();

      const listingPrice = await contract.getListingPrice();

      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.resellToken(id, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait();
    } catch (error) {
      setError("error while creating sale");
      setOpenError(true);
    }
  };

  //--FETCHNFTS FUNCTION

  const fetchNFTs = async () => {
    try {
      if (currentAccount) {
        const provider = new ethers.providers.JsonRpcProvider(providerUrl); //get access to the accounts with JsonRpcProvider-getSigner.
        const contract = fetchContract(provider);

        const data = await contract.fetchMarketItems();
        console.log(data);

        const items = await Promise.all(
          data.map(
            async ({ tokenId, seller, owner, price: unformattedPrice }) => {
              try {
                const tokenURI = await contract.tokenURI(tokenId);
                if (tokenURI) {
                  const {
                    data: { image, name, description },
                  } = await axios.get(tokenURI);
                  const price = ethers.utils.formatUnits(
                    unformattedPrice.toString(),
                    "ether"
                  );

                  return {
                    price,
                    tokenId: tokenId.toNumber(),
                    seller,
                    owner,
                    image,
                    name,
                    description,
                    tokenURI,
                  };
                }
              } catch (e) {}
            }
          )
        );

        // console.log(items);
        return items;
      }
    } catch (error) {
      setError("Error while fetching NFTS");
      setOpenError(true);
    }
  };

  // useEffect(() => {
  //   if (currentAccount) {
  //     fetchNFTs();
  //   }
  // }, []);

  //--FETCHING MY NFT OR LISTED NFTs
  const fetchMyNFTsOrListedNFTs = async (type) => {
    try {
      if (currentAccount) {
        const contract = await connectingWithSmartContract();

        const data =
          type == "fetchItemsListed"
            ? await contract.fetchItemsListed()
            : await contract.fetchMyNFTs();

        const items = await Promise.all(
          data.map(
            async ({ tokenId, seller, owner, price: unformattedPrice }) => {
              const tokenURI = await contract.tokenURI(tokenId);
              try {
                const {
                  data: { image, name, description },
                } = await axios.get(tokenURI);
                const price = ethers.utils.formatUnits(
                  unformattedPrice.toString(),
                  "ether"
                );

                return {
                  price,
                  tokenId: tokenId.toNumber(),
                  seller,
                  owner,
                  image,
                  name,
                  description,
                  tokenURI,
                };
              } catch (e) {}
            }
          )
        );
        return items;
      }
    } catch (error) {
      setError("Error while fetching listed NFTs");
      setOpenError(true);
    }
  };

  useEffect(() => {
    fetchMyNFTsOrListedNFTs();
  }, []);

  //---BUY NFTs FUNCTION
  const buyNFT = async (nft) => {
    try {
      const contract = await connectingWithSmartContract();
      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });

      await transaction.wait();
      router.push("/author");
    } catch (error) {
      setError("Error While buying NFT");
      setOpenError(true);
    }
  };

  //==================================================
  //TRANSFER FUNCTION

  const [transactionCount, setTransactionCount] = useState("");
  const [transaction, setTransaction] = useState([]);
  const [loading, setLoading] = useState(false);
  //---FETCHING SMART CONTRACT
  const fetchTransferContract = (signerOrProvider) =>
    new ethers.Contract(
      TransferFundsAddress,
      TransferFundsABI,
      signerOrProvider
    );

  //---CONNECTING WITH TRANSFER SMART CONTRACT

  const connectingTransferContract = async () => {
    try {
      const web3Modal = new Wenb3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchTransferContract(signer);
      return contract;
    } catch (error) {
      console.log("Something went wrong while connecting with contract");
    }
  };

  const transferEther = async (address, ether, message) => {
    try {
      if (currentAccount) {
        const contract = await connectingTransferContract();
        const unFormatedAmount = ethers.utils.parseEther(ether);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: currentAccount,
              to: address,
              // gas: "0x5208",
              value: unFormatedAmount._hex,
            },
          ],
        });
        const transaction = await contract.addToBlockchain(
          address,
          unFormatedAmount,
          message
        );

        setLoading(true);
        transaction.wait();
        console.log(transaction);
        setLoading(false);

        const transactionsCount = await contract.getTransactionCount();
        setTransactionCount(transactionsCount.toNumber());
        window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //GET ALL THE TRANSACTION
  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const contract = await connectingTransferContract();

        const availableTransactions = await contract.getAllTransactions();

        const structuredTransactions = availableTransactions.map(
          (transaction) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(
              transaction.timestamp.toNumber() * 1000
            ).toLocaleString(),
            message: transaction.message,
            keyword: transaction.keyword,
            amount: parseInt(transaction.amount._hex) / 10 ** 18,
          })
        );

        // console.log(structuredTransactions);

        setTransaction(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NFTMarketplaceContext.Provider
      value={{
        checkIfWalletConnected,
        connectWallet,
        uploadToIPFS,
        createNFT,
        fetchNFTs,
        fetchMyNFTsOrListedNFTs,
        buyNFT,
        createSale,
        currentAccount,
        titleData,
        setOpenError,
        openError,
        error,
        transferEther,
        accountBalance,
        getAllTransactions,
        transaction,
        loading,
      }}>
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
