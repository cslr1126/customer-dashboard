import React from "react";
import LeftSideName from "../components/LeftSideNav";
import MainPanel from "../components/MainPanel";
import RightSideNav from "../components/RightSideNav";

const HomeLayout = () => {
  return (
    <div className="wrapper container-fluid">
      <div className="row">
        <div className="col-md-12 col-lg-4 order-lg-1">
            <LeftSideName />
        </div>
        <div className="col-md-12 col-lg-4 order-lg-2ß order-md-2">
            <MainPanel />
        </div>
        <div className="col-md-12 col-lg-4 order-lg-2">
            <RightSideNav />
          
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
