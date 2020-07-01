import React from "react";
//Data
import timelineData from "../data";
import TimelineItem from "../components/TimelineItem";

const Timeline = () =>
  timelineData.map((data) => <TimelineItem data={data} key={data.id} />);

export default Timeline;
