import React, { useContext, useEffect, useState } from "react";
import { CourseScreenWrapper } from "./styled";
import HeaderCourse from "src/sections/course/header";
import HeaderCourse1 from "src/section-nft";
import { NFTMarketplaceContext } from "src/contexts/NFT/NFTMarketplaceContext";
import { Loader, NFTCard2 } from "src/components/componentsindex";
import { Table } from "nextra/components";
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Paytone+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Paytone+One&display=swap');

</style>
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
    {/* {nfts.length == 0 ? <Loader /> : <NFTCard NFTData={nfts} />}*/}
    {nfts.length == 0 ? <Loader /> : <NFTCard2 NFTData={nfts} />}
    
   
    </CourseScreenWrapper>
  );
};

export default CourseScreen;
