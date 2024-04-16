import React from "react";
import timeline from "../data/timeline.js";
import TimelineItem from "../components/TimelineItem.jsx";

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row container m-auto px-5">
      <div className="w-full">
        {timeline.map((item) => (
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
