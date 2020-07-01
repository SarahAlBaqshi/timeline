import React from "react";
import TimelineItemStyle from "../styles";

const TimelineItem = ({ data }) => (
  <TimelineItemStyle>
    <p>{data.date}</p>
    <p>{data.text}</p>
  </TimelineItemStyle>
);

export default TimelineItem;
