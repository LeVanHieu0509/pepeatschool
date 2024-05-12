import { useContext, useEffect, useState } from "react";
import { NFTMarketplaceContext } from "src/contexts/NFT/NFTMarketplaceContext";
import HeaderCourse from "src/sections/course/header";
import { CourseScreenWrapper, UL } from "./styled";
interface CourseScreenProps {}

const TradeScreen = ({}: CourseScreenProps) => {
  const { checkIfWalletConnected, currentAccount } = useContext(
    NFTMarketplaceContext
  );
  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    if (currentAccount) {
      fetchNFTs().then((items) => {
        setNfts(items.reverse());
        setNftsCopy(items);
      });
    }
  }, [currentAccount]);

  return (
    <CourseScreenWrapper>
      <HeaderCourse />

      <UL>
        <li>Hieepj ddaau buoi</li>
      </UL>
    </CourseScreenWrapper>
  );
};

export default TradeScreen;
