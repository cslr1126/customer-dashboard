import React from "react";
import StickyNav from "../components/StickyNav";
import MainPanel from "../components/MainPanel";


const HomeLayout = () => {
  return (
    <div className="wrapper">
      <div className="row">
        <StickyNav/>
        <MainPanel />
      </div>
    </div>
  );
};

export default HomeLayout;
