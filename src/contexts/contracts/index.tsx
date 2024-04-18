import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { PepeTokenABI, PepeTokenAddress } from "../constants";

const fetchContract = (signerOrProvider, address, ABI) =>
  new ethers.Contract(address, ABI, signerOrProvider);

export const connectingWithPepeToken = async () => {
  try {
    const web3modal = new Web3Modal();

    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection); //Provider is a read-only connection to the blockchain, which allows querying the blockchain state
    const signer = provider.getSigner();

    const contract = fetchContract(signer, PepeTokenAddress, PepeTokenABI);

    return contract;
  } catch (error) {
    console.log(error);
  }
};
