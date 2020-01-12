import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Input from "./Input";
import { ReactComponent as Close } from "../../assets/close.svg";
import {
  modalStyle,
  modalBackgroundStyle,
  closeButtonStyle,
  modalTitle
} from "./style";

const ModalLocation = () => {
  function modalDown() {
    var elem = document.getElementById("modal-location");
    var elemBg = document.getElementById("modal-background");
    var pos = 0;
    var id = setInterval(frame, 3);
    function frame() {
      elemBg.style.display = "none";
      if (pos === -80) {
        clearInterval(id);
      } else {
        pos -= 1;
        elem.style.bottom = pos + "%";
      }
    }
  }

  return (
    <div>
      <div id="modal-background" css={modalBackgroundStyle}></div>
      <div id="modal-location" css={modalStyle}>
        <div onClick={() => modalDown()} css={closeButtonStyle}>
          <Close fill="#424749" />
        </div>
        <div css={modalTitle}>Cek makanan yang tersedia di lokasi kamu !</div>
        <Input />
      </div>
    </div>
  );
};

export default ModalLocation;
