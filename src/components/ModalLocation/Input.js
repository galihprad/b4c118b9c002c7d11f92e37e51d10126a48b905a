import React, { useState } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { ReactComponent as Room } from "../../assets/room.svg";
import {
  inputStyle,
  inputBoxStyle,
  inputTypeStyle,
  inputResultStyle,
  inputResultItemStyle,
  resultTitleSize,
  resultAddressSize,
  formStyle
} from "./style";

const sampleLocation = [
  {
    title: "Kulina",
    address: "Jalan Sudirman"
  },
  {
    title: "Rumah Makan Padang",
    address: "Rt 7, RW 4"
  },
  {
    title: "Bakso Soto",
    address: "Gambiran"
  }
];

const Input = () => {
  const [input, setInput] = useState("");
  const handleChange = e => {
    setInput(e.target.value);
  };

  const locationList = sampleLocation.map(item => (
    <div css={inputResultItemStyle}>
      <div>
        <Room fill="#e2e4e4" />
      </div>
      <div>
        <div css={resultTitleSize}>{item.title}</div>
        <div css={resultAddressSize}>{item.address}</div>
      </div>
    </div>
  ));
  return (
    <div css={inputStyle}>
      <div css={inputBoxStyle}>
        <Room fill="#f9423a" />
        <form css={formStyle}>
          <input
            css={inputTypeStyle}
            type="text"
            value={input}
            onChange={handleChange}
          />
        </form>
      </div>
      <div css={inputResultStyle}>{input.length >= 3 && locationList}</div>
    </div>
  );
};

export default Input;
