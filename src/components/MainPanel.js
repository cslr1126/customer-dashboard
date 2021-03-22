import React from 'react';

const MainPanel = () => {
    return(
        <div className="container-fluid">
            <div className="row">
              <div className="header">
                <p>
                  Welcome back. Here's your account at a glance.
                  You have an upcoming payment of $500
                </p>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Gross Sales</h5>
                    <p className="card-text">$24,323.54</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Transactions</h5>
                    <p className="card-text">519</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default MainPanel;