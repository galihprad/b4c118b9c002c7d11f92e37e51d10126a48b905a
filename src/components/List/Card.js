import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Gambar from "../../assets/gambar.png";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as StarBorder } from "../../assets/star_border.svg";
import { ReactComponent as StarHalf } from "../../assets/star_half.svg";

import {
  cardStyle,
  imgStyle,
  bottomContainer,
  addButton,
  ratingStyle,
  nameStyle,
  restaurantStyle,
  priceStyle,
  cardInfo
} from "./style";

const Card = props => {
  const { name, rating, price, restaurant, getPrice } = props;

  const fullStar = Math.floor(rating);
  const halfStar = Math.ceil(rating);
  let ratingArray = [1, 2, 3, 4, 5];
  const ratingStar = ratingArray.map(item => {
    if (item <= fullStar) {
      return <Star />;
    } else if (item <= halfStar) {
      return <StarHalf />;
    } else {
      return <StarBorder />;
    }
  });

  const handleAddClick = () => {
    document.getElementById("cart").style.display = "flex";
    getPrice(price);
  };

  return (
    <div css={cardStyle}>
      <div>
        <img css={imgStyle} src={Gambar} alt="" />
      </div>
      <div css={cardInfo}>
        <div css={ratingStyle}>
          {rating}
          {ratingStar}
        </div>
        <div css={nameStyle}>{name}</div>
        <div css={restaurantStyle}>by {restaurant}</div>
        <div css={bottomContainer}>
          <div css={priceStyle}>Rp {price}</div>
          <div css={addButton} onClick={handleAddClick}>
            ADD +
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
