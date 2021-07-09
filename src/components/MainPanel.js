import React from 'react';

import  '../app.css'

const styles = {
  main: {
    display: "flex"
  },
  card: {
    padding: "10px",
    margin: "10px"
  }
}

const MainPanel = () => {
    return(
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <div className="header">
                <p>
                  Welcome back. Here's your account at a glance.
                  You have an upcoming payment of $500
                </p>
              </div>
              <div className="container" style={styles.main}>
                <div className="col-sm-4">
                <div className="card" style={styles.card}>
                  <div className="card-body">
                    <h5 className="card-title">3</h5>
                    <p className="card-text">Tasks Pending</p>
                  </div>
                </div>
              </div>
                <div className="col-sm-4">
                <div className="card" style={styles.card}>
                  <div className="card-body">
                    <h5 className="card-title">12</h5>
                    <p className="card-text">Actions Required</p>
                  </div>
                </div>
              </div>
                <div className="col-sm-4">
                <div className="card" style={styles.card}>
                  <div className="card-body">
                    <h5 className="card-title">Transactions</h5>
                    <p className="card-text">519</p>
                  </div>
                </div>
              </div>
              </div>
             
          
          </main>
    )
}

export default MainPanel;