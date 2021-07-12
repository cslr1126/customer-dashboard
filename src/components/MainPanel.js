import React from "react";

import  "../app.css";


const MainPanel = ({ className }) => {
  return (
    <main role="main" className={className}>
      <div className="row align-items-center mb-4">
        <div className="col">
          <h1 className="h4 mb-0">Overview</h1>
        </div>
      </div>
      <div className="row  mx-n2">
        <div className="col-lg-3 col-sm-6 px-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">3</h5>
              <p className="card-text">Tasks Pending</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 px-2">
          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">12</h5>
              <p className="card-text">Actions Required</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 px-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Transactions</h5>
              <p className="card-text">519</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 px-2">
          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Transactions</h5>
              <p className="card-text">519</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPanel;
