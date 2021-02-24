import React from "react";
import LeftSideName from "../components/LeftSideNav";
import MainPanel from "../components/MainPanel";
import RightSideNav from "../components/RightSideNav";

const HomeLayout = () => {
  return (
    <div className="wrapper">
      <div className="row align-items-start">
        <div className="col">
            <LeftSideName />
        </div>
        <div className="col">
            <MainPanel />
        </div>
        <div className="col">
            <RightSideNav />
          
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
