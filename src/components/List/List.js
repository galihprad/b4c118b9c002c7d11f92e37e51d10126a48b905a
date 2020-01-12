import React, { useState } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Card from "./Card";
import dataList from "./dataList";
import Cart from "./Cart";
import { containerStyle } from "./style";

const List = () => {
  const [total, setTotal] = useState({ count: 0, cartPrice: 0 });

  const getPrice = price => {
    setTotal({ count: total.count + 1, cartPrice: total.cartPrice + price });
  };

  const menuList = dataList.map(item => (
    <Card
      key={item.rating}
      getPrice={getPrice}
      name={item.name}
      rating={item.rating}
      restaurant={item.restaurant}
      price={item.price}
    />
  ));
  return (
    <div css={containerStyle}>
      {menuList}
      <Cart total={total} />
    </div>
  );
};

export default List;
