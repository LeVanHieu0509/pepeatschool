import { BigNumber, ethers } from "ethers";
import { createContext, useEffect, useState } from "react";
import Web3Modal from "web3modal";
import {
  gptMemberShipABI,
  gptMemberShipAddress,
} from "../constants/chat-member-gpt";
import { checkIfWalletConnected } from "src/contracts";

/*
    Hợp đồng này cho phép chủ sở hữu (owner) tạo ra các loại thành viên khác nhau, 
    người dùng có thể mua các loại thành viên này và quản lý thông tin liên quan đến các thành viên.

    Chức năng chính của hợp đồng:
    1, Tạo loại thành viên: Chủ sở hữu có thể tạo ra các loại thành viên với tên, chi phí và ngày.
    2, Mua thành viên: Người dùng có thể mua một loại thành viên cụ thể và 
    nhận được một NFT đại diện cho thành viên đó.
    3, Quản lý thông tin thành viên: Hợp đồng lưu trữ và cung cấp thông tin về các loại thành viên, 
    thành viên đã được mua và thông tin thành viên của từng người dùng.
    4, Rút tiền: Chủ sở hữu có thể rút tiền từ hợp đồng.
*/

const ChatMemberShipContext = createContext<{ state?: any }>({
  state: "",
});

export const ChatMemberShipProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [address, setAddress] = useState("");
  const [free, setFree] = useState();
  const [userMemberShip, setUserMemberShip] = useState();
  const [open, setOpen] = useState<any>();
  const [account, setAccount] = useState("");
  const [ether, setEther] = useState("");
  const [networkConnect, setNetworkConnect] = useState("");

  const fetchContract = (signerOrProvider, address, ABI) =>
    new ethers.Contract(address, ABI, signerOrProvider);

  const connectingWithChatMemberShip = async () => {
    try {
      const web3modal = new Web3Modal();

      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection); //Provider is a read-only connection to the blockchain, which allows querying the blockchain state
      const signer = provider.getSigner();

      const contract = fetchContract(
        signer,
        gptMemberShipAddress,
        gptMemberShipABI
      );

      return contract;
    } catch (error) {
      console.log(error);
    }
  };

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
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  useEffect(() => {
    (async () => {
      const contract = await connectingWithChatMemberShip();
      console.log({ contract });
    })();
  }, []);

  // owner; //Địa chỉ của chủ sở hữu hợp đồng.
  // memberShipTypes; //Số lượng loại thành viên.
  // totalMemberships; //Tổng số thành viên.

  //1. Check account exists.
  //2. get list userMemberships - thông tin thành viên của từng địa chỉ người dùng.
  //3. get list memberships - loại thành viên.
  //4. hasBought - người dùng đã mua một loại thành viên cụ thể chưa.
  //5. get ra thành viên này membershipTaken => Lưu địa chỉ của người sở hữu một loại thành viên cụ thể.
  //6. list membershipsTaken: danh sách các members đã mua cho từng loại thành viên.
  //7. List - Tạo một loại thành viên mới.

  //8. mint
  // Min một loại thành viên mới.
  // Hàm mint trong hợp đồng Solidity này có nhiệm vụ cho phép người dùng mua một loại thành viên cụ thể bằng cách.
  // trả một số tiền và nhận được một NFT đại diện cho thành viên đó.

  //9. getMembership - lấy thông tin về một loại thành viên cụ thể.
  //10. getMembershipsTaken - lấy danh sách các thành viên đã được mua của một loại thành viên cụ thể.
  //11. withdraw - rút toàn bộ số tiền trong hợp đồng về địa chỉ của chủ sở hữu.
  //12. getUserMembership - lấy thông tin thành viên của một người dùng cụ thể.

  const DAPP_NAME = "";
  // LISTING MEMBERSHIP
  const listMembership = () => {};

  //BUY MEMBERSHIP
  const buyMembership = (memberId: number) => {};

  return (
    <ChatMemberShipContext.Provider value={{}}>
      {children}
    </ChatMemberShipContext.Provider>
  );
};

export default ChatMemberShipContext;
