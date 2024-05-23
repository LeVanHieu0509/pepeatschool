import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./NFTCard.module.css";
import images from "../../img";

const NFTCard = ({ NFTData, onClick }) => {
  const [like, setLike] = useState(true);

  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div>
      {/* <div className={Style.NFTCard}>
        {NFTData.map((el, i) => (
          <div
            className="bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400"
            onClick={() => onClick(el)}>
            <div className={Style.NFTCard_box} key={i + 1}>
              <div className={Style.NFTCard_box_img}>
                <Image
                  src={el.image}
                  alt="NFT images"
                  width={600}
                  height={600}
                  className={Style.NFTCard_box_img_img}
                />
              </div>
                <div className={Style.NFTCard_box_update}>
                  <div className={Style.NFTCard_box_update_left}>
                    <div
                      className={Style.NFTCard_box_update_left_like}
                      onClick={() => likeNft()}>
                      {like ? (
                        <AiOutlineHeart />
                      ) : (
                        <AiFillHeart
                          className={Style.NFTCard_box_update_left_like_icon}
                        />
                      )}
                      {""} 25
                    </div>
                  </div>

              <div className={Style.NFTCard_box_update_details}>
                <div className={Style.NFTCard_box_update_details_price}>
                  <div className={Style.NFTCard_box_update_details_price_box}>
                    <h6>
                      #{el.tokenId} {el.name}
                    </h6>

                    <p>
                      Mã code:{" "}
                      {el.description?.slice(0, 3) +
                        "****" +
                        el.description?.slice(
                          el.description.length - 1,
                          el.description.length
                        )}
                    </p>

                    <div
                      className={
                        Style.NFTCard_box_update_details_price_box_box
                      }>
                      <div
                        className={
                          Style.NFTCard_box_update_details_price_box_bid
                        }>
                        <p>{el.price}ETH</p>
                      </div>
                      <div
                        className={
                          Style.NFTCard_box_update_details_price_box_stock
                        }></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default NFTCard;
