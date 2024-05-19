import { BigNumber, ethers } from "ethers";
import { ReactNode, createContext, useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { checkIfWalletConnected, connectWallet } from "../../contracts";
import { connectingWithPepeToken } from "../contracts";
import ERC20 from "../contracts/ERC20Token.json";

const AppContext = createContext<{
  loading?: any;
  setLoading?: any;
  account?: string;
  networkConnect?: any;
  ether?: any;
  tokenData?: any;
  connectWallet?: any;
  reLoading?: boolean;
  setReloading?: any;
  setAccount?: any;
  setNetworkConnect?: any;
  open?: any;
  setOpen?: any;
  transferTokenUnlock?: any;
  setTapAdmin?: any;
  tapAdmin?: any;
}>({
  tapAdmin: "OVERVIEW",
});

const addToken = [];

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<any>();
  const [tokenData, setTokenData] = useState([]);
  const [account, setAccount] = useState("");
  const [ether, setEther] = useState("");
  const [networkConnect, setNetworkConnect] = useState("");
  const [reLoading, setReloading] = useState(false);
  const [open, setOpen] = useState<any>();
  const [tapAdmin, setTapAdmin] = useState("OVERVIEW");

  const fetchingData = async () => {
    try {
      const userAccount = await checkIfWalletConnected();
      setAccount(userAccount);

      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);

      //check balance
      const getBalance = await provider.getBalance(userAccount);

      const convertBal = BigNumber.from(getBalance).toString();
      const ethValue = ethers.utils.formatEther(convertBal);

      setEther(ethValue);

      //get network name
      const network = await provider.getNetwork();

      setNetworkConnect(network.name);

      //all token balance and data
      addToken.forEach(async (el, i) => {
        console.log("el", el);
        const contract = new ethers.Contract(el, ERC20, provider);
        const userBalance = await contract.balanceOf(userAccount);
        const tokenLeft = BigNumber.from(userBalance).toString();

        const convertTokenBal = ethers.utils.formatEther(tokenLeft);

        const symbol = await contract.symbol();
        const name = await contract.name();

        // tokenData.push({
        //   name,
        //   symbol,
        //   tokenBalance: convertTokenBal,
        //   tokenAddress: el,
        // });
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchingData();
    // transferTokenUnlock();
  }, []);

  const transferTokenUnlock = async (amount = 1000) => {
    try {
      const userAccount = await checkIfWalletConnected();
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);

      //check balance
      const getBalance = await provider.getBalance(userAccount);

      const convertBal = BigNumber.from(getBalance).toString();
      const ethValue = ethers.utils.formatEther(convertBal);

      //DAI Balance
      const pepeContract = await connectingWithPepeToken(); //connect smart contract

      const pepeBal = await pepeContract?.balanceOf(userAccount); //get money
      const pepeToken = BigNumber.from(pepeBal).toString(); //convert money

      const transaction = await pepeContract?.transfer(
        process.env.NEXT_PUBLIC_ADDRESS_DEV,
        ethers.BigNumber.from("1000000000000000000000"),
        {
          gasLimit: 300000, // Setting a higher gas limit manually
        }
      );
      await transaction.wait();

      const result: any = await getStatusTransaction(transaction.hash);

      if (result.status == 1) {
        console.log("success");
        return true;
      } else {
        console.log("failed");
        return false;
      }
    } catch (error) {
      console.log("error", error);
      return false;
    }
  };

  const getStatusTransaction = async (hash: string) => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://data-seed-prebsc-2-s2.binance.org:8545"
    );

    return await provider.getTransactionReceipt(hash);
  };

  return (
    <AppContext.Provider
      value={{
        setTapAdmin,
        tapAdmin,
        transferTokenUnlock,
        reLoading,
        setReloading,
        connectWallet: connectWallet,
        account,
        networkConnect,
        ether,
        tokenData,
        loading,
        setLoading,
        setAccount,
        setNetworkConnect,
        setOpen,
        open,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

const failed = {
  result: {
    hash: "0x000182df0fa7c19301051db449a7200524bb31456692fed4a38c48839b0c5f13",
    type: 2,
    accessList: null,
    blockHash: null,
    blockNumber: null,
    transactionIndex: null,
    confirmations: 0,
    from: "0xa921747A4a9241299336119d24ED894B76fc73Cc",
    gasPrice: {
      type: "BigNumber",
      hex: "0x012a05f200",
    },
    maxPriorityFeePerGas: {
      type: "BigNumber",
      hex: "0x012a05f200",
    },
    maxFeePerGas: {
      type: "BigNumber",
      hex: "0x012a05f200",
    },
    gasLimit: {
      type: "BigNumber",
      hex: "0x0493e0",
    },
    to: "0x41c3fc84F65308a29Cd3Da2AB7F5584F4A978e8b",
    value: {
      type: "BigNumber",
      hex: "0x00",
    },
    nonce: 0,
    data: "0xa9059cbb000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb922660000000000000000000000000000000000000000000000056bc75e2d63100000",
    r: "0x5e90bd5a442a2e5765be0ed504f85116cb6fb1a90af43a5ea3438b30122fadf8",
    s: "0x58000fd538411803fd4b2467051b26bf5837060b3a40cc4e8ec68badd99f5124",
    v: 1,
    creates: null,
    chainId: 0,
  },
};
