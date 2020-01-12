import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import { ReactComponent as RightArrow } from "../../assets/right_arrow.svg";
import { ReactComponent as CartLogo } from "../../assets/cart_logo.svg";
import { cartStyle, cartLeftStyle, cartRightStyle, ongkirStyle } from "./style";

const Cart = props => {
  const { total } = props;
  return (
    <div id="cart" css={cartStyle}>
      <div css={cartLeftStyle}>
        <div>
          {total.count} items | Rp {total.cartPrice}
        </div>
        <div css={ongkirStyle}>Termasuk ongkos kirim</div>
      </div>
      <div css={cartRightStyle}>
        <CartLogo fill="white" />
        <RightArrow fill="white" />
      </div>
    </div>
  );
};

export default Cart;
