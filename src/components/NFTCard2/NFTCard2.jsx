import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./NFTCard2.module.css";
import images from "../../img";
import { Row } from "styles/common";

const NFTCard = ({ NFTData, onClick }) => {
  // const CardArray = [
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  //   images.nft_image_1,
  //   images.nft_image_2,
  //   images.nft_image_3,
  // ];

  const [like, setLike] = useState(true);

  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };
  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  };

  // console.log(NFTData);
  return (
    <div className={Style.Main}>
      <div className={Style.NFTCard}>
        {NFTData.filter((a) => a.tokenId > 21).map((el, i) => (
          <div className={Style.NFT_section}>
            <div className={Style.NFTCard_box}>
              <div className={Style.NFTCard_box_img}>
                <img className={Style.NFTCard_img} src={el.image}></img>
              </div>
              <div className={Style.NFT_course_info}>
                <div className={Style.NFT_course_name}>
                  {truncateString(`${el.name}`, 20)} # {el.tokenId}
                </div>
                <div className={Style.NFT_course_price}>
                  {el.price * 10000} PEPEAS
                </div>
              </div>
              <div className={Style.last_sale}>
                <div className={Style.last_sale_price}>
                  Last sale: 1000 PEPEAS
                </div>
              </div>
              <div
                className={Style.NFT_purchase_section}
                onClick={() => onClick(el)}>
                <div className={Style.NFT_unlock_btn}>Unlock Now</div>
                <div className={Style.NFT_unlock_btn_img}>
                  <img
                    className={Style.NFT_unlock_img}
                    src="/img-logo/lock.png"></img>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTCard;
