import React from "react";
import { TimelineItemStyle, TimelineContainer2 } from "../styles";

const TimelineItem = ({ data }) => (
  //   <div className="timeline-item">
  <TimelineItemStyle>
    <p>{data.date}</p>
    <p>{data.text}</p>
  </TimelineItemStyle>
  //   {/* </div> */}
);

export default TimelineItem;
