import React, { useState } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import { navButtonStyle, buttonStyleWhite, buttonStyleDark } from "./style";

window.onscroll = function(e) {
  if (this.oldScroll >= this.scrollY) {
    document.getElementById("nav-button").style.display = "flex";
  } else {
    document.getElementById("nav-button").style.display = "none";
  }
  this.oldScroll = this.scrollY;
};

const NavButton = () => {
  const [selected, setSelected] = useState(1);
  const togleStyle = i => {
    return i === selected ? buttonStyleDark : buttonStyleWhite;
  };
  return (
    <div css={navButtonStyle} id="nav-button">
      <div css={togleStyle(1)} onClick={() => setSelected(1)}>
        Lunch
      </div>
      <div css={togleStyle(2)} onClick={() => setSelected(2)}>
        Dinner
      </div>
    </div>
  );
};

export default NavButton;
