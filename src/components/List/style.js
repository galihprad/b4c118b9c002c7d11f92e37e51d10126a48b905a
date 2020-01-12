/** @jsx jsx */
import { jsx, css } from "@emotion/core";

///////// LIST STYLE /////////
export const containerStyle = css`
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background
`;

//////// CARD STYLE //////
export const cardStyle = css`
  width: 90%;
  height: 325px;
  box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
  margin: 20px;
  border-radius: 10px;
`;
export const imgStyle = css`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
`;
export const bottomContainer = css`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const addButton = css`
  background-color: #f9423a;
  color: white;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  height: 30px;
  border-radius: 5px;
`;
export const ratingStyle = css`
  margin: 5px 0 5px 0px;
  font-size: 12px;
  color: #6e7679;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const nameStyle = css`
  margin: 5px 0 5px 0px;
  font-size: 14px;
  color: #424749;
  font-weight: 700;
  display: flex;
  align-items: center;
`;
export const restaurantStyle = css`
  margin: 5px 0 5px 0px;
  font-size: 12px;
  color: #6e7679;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const priceStyle = css`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: flex-start;
  font-weight: 700;
  font-size: 14px;
  color: #424749;
`;

export const cardInfo = css`
  padding: 0px 10px 0px 20px;
`;

/////////CART STYLE//////////

export const cartStyle = css`
  padding: 10px;
  color: white;
  display: none;
  bottom: 10px;
  background-color: #a23530;
  position: fixed;
  width: 90%;
  height: 40px;
  border-radius: 5px 5px 5px 5px;
`;

export const cartLeftStyle = css`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: flex-start;
  justify-content: center;
  font-weight: 700;
`;
export const cartRightStyle = css`
  display: flex;
  width: 40%;
  justify-content: flex-end;
  align-items: center;
`;

export const ongkirStyle = css`
  font-weight: 300;
  font-size: 10px;
`;
