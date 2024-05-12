import React, { useContext, useEffect, useState } from "react";
import { CourseScreenWrapper } from "./styled";
import HeaderCourse from "src/sections/course/header";
import { NFTMarketplaceContext } from "src/contexts/NFT/NFTMarketplaceContext";
import { Loader, NFTCard } from "src/components/componentsindex";
interface CourseScreenProps {}

const CourseScreen = ({}: CourseScreenProps) => {
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

      {nfts.length == 0 ? <Loader /> : <NFTCard NFTData={nfts} />}
    </CourseScreenWrapper>
  );
};

export default CourseScreen;
