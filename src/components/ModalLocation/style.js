/** @jsx jsx */
import { jsx, css } from "@emotion/core";

//////// STYLE INPUT /////////
export const inputStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px 0px 10px 0px;
  align-items: center;
`;

export const inputBoxStyle = css`
  width: 80%;
  height: 30px;
  border: 2px solid #e2e4e4;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const inputTypeStyle = css`
  :focus {
    outline: none;
  }
  border: none;
  width: 100%;
`;

export const formStyle = css`
  width: 100%;
`;

export const inputResultStyle = css`
  width: 100%;
  height: 100px;
`;

export const inputResultItemStyle = css`
  width: 80%;
  margin: 10px 10% 10px 10%;
  height: 40px;
  border-bottom: 1px solid #f1f1f2;
  display: flex;
  align-items: center;
`;

export const resultTitleSize = css`
  font-size: 12px;
  font-weight: 700;
  color: #424749;
`;

export const resultAddressSize = css`
  font-size: 10px;
  color: #6e7679;
`;

/////////// STYLE MODAL //////////
export const modalStyle = css`
  width: 100%;
  height: 80%;
  background: white;
  bottom: -80%;
  position: fixed;
  border-radius: 10px 10px 0px 0px;
`;

export const modalBackgroundStyle = css`
  display: none;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0px;
  position: fixed;
`;

export const closeButtonStyle = css`
  height: 30px;
  display: flex;
  justify-content: flex-end;
  margin: 10px 10px 0px 0px;
`;

export const modalTitle = css`
  font-size: 18px;
  margin: 10px 10% 10px 10%;
  font-weight: 700;
  color: #424749;
`;
