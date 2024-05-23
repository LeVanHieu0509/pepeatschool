import React, { useContext, useEffect, useState } from "react";
import { NFTMarketplaceContext } from "src/contexts/NFT/NFTMarketplaceContext";
import HeaderCourse from "src/sections/course/header";
import { CourseScreenWrapper, UL } from "./styled";
import { Loader } from "src/components/componentsindex";
import { Button } from "nextra/components";

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
      <div className="Main">
        <div className="Main-title">
          <div className="pepetitle-and-logo">
            <div className="pepetitle">PAS</div>
            <img
              src="/img-logo/settings-gears.png"
              className="pepetitle-logo"></img>
          </div>
          <div className="pepetitle-line">Risk Management System</div>
        </div>
        <div className="prediction_section ">
          <div className="eighty-percent-section">
            <div className="prediction_headline">
              Dự báo thị trường tuần này
            </div>
            <div className="red-condition_prediction">
              <div className="down_prediction">Giảm</div>
              <img
                src="/img-logo/pepe-crew-img.png"
                className="down-img_prediction"></img>
            </div>
            <div className="description_inter">
              <span className="description_inter_logo"></span>
              Dự đoán bởi
              <b className="inter"> PEPEATSCHOOL Team </b>
              với độ chính xác trong quá khứ:
              <span className="inter"> 85%</span>
            </div>
          </div>
          <div className="twenty-precent-section">
            <div className="prediction_risk_part ">
              <div className="prediction_risk_headline bold sm-text margin-bot">
                Tỉ lệ rủi ro
              </div>
              <div className="prediction_risk_data red800 bold margin-bot">
                35.63%
              </div>
            </div>
            <div className="prediction_risk_change">
              <div className="prediction_risk_change_headline bold sm-text margin-bot">
                Tỉ lệ rủi ro thay đổi
              </div>
              <div className="prdiction_risk_change_data red800 bold margin-bot">
                1.75%
              </div>
            </div>
            <Button className="btn_more_info bold">Xem thêm</Button>
            <div className="PEPEATSCHOOL-info ssm-text">
              Tìm hiểu thêm về RMS
            </div>
          </div>
        </div>
        <div className="ai-section">
          <div className="ai_ask_title_part">
            <img
              className="h-12 w-12 rounded-full  border-1 border-black dark:border-g ray-800 mx-auto my-4"
              src="https://cointelegraph.com/magazine/wp-content/uploads/2021/03/unnamed1.png"
              alt=""
            />
            <div className="ai_title bold">
              Pepe AI
              <div className="description-ai">
                Ask and receive answer in a few minutes
              </div>
            </div>
          </div>
          <div className="ask_ai_section">
            <div className="answer_ai_box"></div>
            <input
              className="ask_ai_box"
              placeholder="Nhập câu hỏi ở đây"
              type="text"></input>
            <div className="btn-ask-ai">
              <img className="img-ask-ai" src="/img-logo/application.png"></img>
            </div>
          </div>
        </div>
      </div>
    </CourseScreenWrapper>
  );
};

export default TradeScreen;
