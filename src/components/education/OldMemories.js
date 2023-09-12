import React from "react";
import HeroUnit from "../projects/HeroUnit";
import MasonryImageList from "./MasonryImageList";

const OldMemories = (props) => {
  const desc = props.desc;
  const data = props.data;
  const heading = props.heading;
  const groups = props.groups;
  return (
    <div>
      <HeroUnit heading={heading} desc={desc}></HeroUnit>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MasonryImageList data={data} groups = {groups}></MasonryImageList>
      </div>
    </div>
  );
};

export default OldMemories;
