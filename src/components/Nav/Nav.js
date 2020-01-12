import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import Calendar from "./Calendar";
import NavButton from "./NavButton";
import { ReactComponent as LeftArrow } from "../../assets/left_arrow.svg";
import { ReactComponent as DownArrow } from "../../assets/down_arrow.svg";
import {
  navStyle,
  topNavStyle,
  arrowStyle,
  navTopStyle,
  navBottomStyle
} from "./style";

const Nav = () => {
  function modalUp() {
    var elem = document.getElementById("modal-location");
    var elemBg = document.getElementById("modal-background");
    var pos = -80;
    var id = setInterval(frame, 3);
    function frame() {
      elemBg.style.display = "block";
      if (pos === 0) {
        clearInterval(id);
      } else {
        pos += 1;
        elem.style.bottom = pos + "%";
      }
    }
  }
  return (
    <div>
      <div css={topNavStyle}>
        <div css={navStyle}>
          <div css={arrowStyle}>
            <LeftArrow fill="#424749" />
          </div>
          <div>
            <div css={navTopStyle}>ALAMAT PENGANTARAN</div>
            <div css={navBottomStyle} onClick={() => modalUp()}>
              Tokopedia Tower <DownArrow fill="#f9423a" />
            </div>
          </div>
        </div>
        <Calendar />
      </div>
      <NavButton />
    </div>
  );
};

export default Nav;
