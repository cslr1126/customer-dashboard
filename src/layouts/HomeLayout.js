import React from "react";
import StickNav from "../components/StickyNav";
import MainPanel from "../components/MainPanel";

const HomeLayout = () => {
  return (
    <div className="wrapper container-fluid">
      <div className="row">
        <StickNav/>
        <MainPanel />
      </div>
    </div>
  );
};

export default HomeLayout;
