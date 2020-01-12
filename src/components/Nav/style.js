/** @jsx jsx */
import { jsx, css } from "@emotion/core";

/////// STYLE NAV /////////////

export const navStyle = css`
  display: flex;
  height: 60px;
  width: 100%;
  align-items: center;
  color: #424749;
  background-color: white;
`;

export const topNavStyle = css`
  top: 0;
  margin-top: 0;
  width: 100%;
  position: fixed;
`;

export const arrowStyle = css`
  margin-left: 10px;
  width: 40px;
  display: flex;
  align-items: center;
`;

export const navTopStyle = css`
  font-size: 8px;
`;

export const navBottomStyle = css`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
`;

/////// STYLE NAV BUTTON /////////////

export const navButtonStyle = css`
  padding-top: 10px;
  top: 119px;
  width: 100%;
  background-color: white;
  position: fixed;
  display: flex;
  justify-content: center;
  height: 50px;
  font-size: 14px;
  font-weight: 700;
  border-bottom: 1px solid #e2e4e4;
`;

export const buttonStyleWhite = css`
  background-color: white;
  color: #424749;
  width: 45%;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #f1f1f2;
  border-radius: 5px 5px 5px 5px;
`;

export const buttonStyleDark = css`
  background-color: #424749;
  color: white;
  width: 45%;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 5px 5px;
`;

/////// STYLE CALENDAR/////////////

export const slider = css`
  margin-top: 0px;
  top: 59px;
  width: 100%;
  position: fixed;
  background-color: white;
  height: 60px;
  overflow-x: scroll;
  overflow-y: scroll;
  white-space: nowrap;
  border-bottom: 1px solid #e2e4e4;
`;

export const dateListStyle = css`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  margin: 5px;
  background-color: white;
  border-radius: 50%;
  color: #424749;
`;

export const dateListStyleWeekend = css`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  margin: 5px;
  background-color: white;
  border-radius: 50%;
  color: #e2e4e4;
`;

export const dateListStyleDark = css`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  margin: 5px;
  background-color: #424749;
  border-radius: 50%;
  color: white;
`;

export const dayStyle = css`
  font-size: 10px;
`;

export const dateStyle = css`
  margin-top: -3px;
  font-size: 16px;
  font-weight: 700;
`;
