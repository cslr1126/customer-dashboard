import React from 'react';

const MainPanel = () => {
    return(
        <div className="container">
            <div className="row">
              <div className="header">
                <p>
                  Welcome back. Here's your account at a glance.
                  You have an upcoming payment of $500
                </p>
              </div>
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Gross Sales</h5>
                    <p class="card-text">$24,323.54</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Transactions</h5>
                    <p class="card-text">519</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default MainPanel;