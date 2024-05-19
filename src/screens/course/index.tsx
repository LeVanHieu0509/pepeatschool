import React, { useContext, useEffect, useState } from "react";
import { CourseScreenWrapper } from "./styled";
import HeaderCourse from "src/sections/course/header";
import { NFTMarketplaceContext } from "src/contexts/NFT/NFTMarketplaceContext";
import { Loader, NFTCard } from "src/components/componentsindex";
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
    {nfts.length == 0 ? <Loader /> : <NFTCard NFTData={nfts} />}
    <div className="Main">
      <div className="NFT-course-market-section">
        <div className="nft-row">
          <div className="nft-course-item course-item-1">
            <img src="https://einvoice.vn/FileUpload/ArticleMaterials/images/tc%20dn%20li%c3%aan%20quan%20trtiep%20%c4%91%e1%ba%bfn%20t%c3%acnh%20h%c3%acnh%20kdoanh.png" className="nft-course-item-img"></img>
            <div className="nft-course-name bold bg-text text-white">Tài chính doanh nghiệp</div>
            <div className="purchase-part">
              <div className="nft-course-price sm-text bold text-white">10000 PEPEAS</div>
              <div className="btn-unlock-NFT bold sm-text">Mở khóa 
              </div>
            </div>
            <div className="code-course-container text-white">
             <div className="code-title bold">Code</div>
             <div className="code"></div>
            </div>
          </div>
          <div className="nft-course-item course-item-1">
            <img src="https://einvoice.vn/FileUpload/ArticleMaterials/images/tc%20dn%20li%c3%aan%20quan%20trtiep%20%c4%91%e1%ba%bfn%20t%c3%acnh%20h%c3%acnh%20kdoanh.png" className="nft-course-item-img"></img>
            <div className="nft-course-name bold bg-text text-white">Tài chính doanh nghiệp</div>
            <div className="purchase-part">
              <div className="nft-course-price sm-text bold text-white">10000 PEPEAS</div>
              <div className="btn-unlock-NFT bold sm-text">Mở khóa 
              </div>
            </div>
            <div className="code-course-container text-white">
             <div className="code-title bold">Code</div>
             <div className="code"></div>
            </div>
          </div>

        
        </div>
      </div>
    </div>
   
    </CourseScreenWrapper>
  );
};

export default CourseScreen;
