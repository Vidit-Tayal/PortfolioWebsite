import React from "react";
import HeroUnit from "../projects/HeroUnit";
import MasonryImageList from "./MasonryImageList";

const OldMemories = (props) => {
  const desc = props.desc;
  const data = props.data;
  const heading = props.heading;
  return (
    <div>
      <HeroUnit heading={heading} desc={desc}></HeroUnit>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MasonryImageList data={data}></MasonryImageList>
      </div>
    </div>
  );
};

export default OldMemories;
