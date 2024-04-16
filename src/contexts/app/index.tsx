import { BigNumber, ethers } from "ethers";
import { ReactNode, createContext, useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { checkIfWalletConnected, connectWallet } from "../../contracts";
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
}>({});

const addToken = [];

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<any>();
  const [tokenData, setTokenData] = useState([]);
  const [account, setAccount] = useState("");
  const [ether, setEther] = useState("");
  const [networkConnect, setNetworkConnect] = useState("");
  const [reLoading, setReloading] = useState(false);
  const [open, setOpen] = useState<any>();

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

      //GET LIQUIDITY
      // const userStorageData = await connectingWithUserStorageContract();
      // const userLiquidity = await userStorageData.getAllTransactions();

      // console.log({ userLiquidity });

      // userLiquidity.map(async (el) => {
      //   const liquidityData = await getLiquidityData(el.poolAddress, el.tokenAddress0, el.tokenAddress1);

      //   getAllLiquidity.push(liquidityData);
      // });
      // console.log({ getAllLiquidity });
      // //WETH Balance
      // const wethContract = await connectingWithIWETHToken(); //connect smart contract
      // const wethBal = await wethContract.balanceOf(userAccount); //get money
      // const wethToken = BigNumber.from(wethBal).toString(); //convert money

      // const convertWethTokenBal = ethers.utils.formatEther(wethToken);
      // setWeth9(convertWethTokenBal);

      // //DAI Balance
      // const daiContract = await connectingWithDaiToken(); //connect smart contract
      // const daiBal = await daiContract.balanceOf(userAccount); //get money
      // const daiToken = BigNumber.from(daiBal).toString(); //convert money

      // const convertDaiTokenBal = ethers.utils.formatEther(daiToken);
      // setDai(convertDaiTokenBal);

      // //DAI Balance
      // const usdcContract = await connectingWithDaiToken(); //connect smart contract
      // const usdcBal = await usdcContract.balanceOf(userAccount); //get money
      // const usdcToken = BigNumber.from(usdcBal).toString(); //convert money
      // setUsdc(usdcToken);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <AppContext.Provider
      value={{
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
