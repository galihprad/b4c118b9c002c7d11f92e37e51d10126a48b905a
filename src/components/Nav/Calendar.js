import React, { useState } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import dateData from "./dateData";

import {
  slider,
  dateListStyle,
  dateListStyleDark,
  dateListStyleWeekend,
  dayStyle,
  dateStyle
} from "./style";

const Calendar = () => {
  const [selected, setSelected] = useState(1);

  const handleClick = (day, date) => {
    if (day !== "SAB" && day !== "MIN") {
      setSelected(date);
    }
  };
  const calStyle = (day, date) => {
    if (day === "SAB" || day === "MIN") {
      return dateListStyleWeekend;
    }
    return date === selected ? dateListStyleDark : dateListStyle;
  };

  const dateList = dateData.map(item => (
    <div
      css={calStyle(item.day, item.date)}
      onClick={() => handleClick(item.day, item.date)}
      key={item.date}
    >
      <div css={dayStyle}>{item.day}</div>
      <div css={dateStyle}>{item.date}</div>
    </div>
  ));
  return (
    <div>
      <div css={slider}>{dateList}</div>
    </div>
  );
};

export default Calendar;
