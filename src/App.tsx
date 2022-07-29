import React from "react";
import Chart from "./components/Chart";
import Data from "./data.json"

function App() {
  return (
    <div className="container">
      <div className="card__balance">
        <div className="card__balance-figure">
          <span>My balance</span>
          <span className="bold-figure">$921.48</span>
        </div>
        <svg
          width="72"
          height="48"
          viewBox="0 0 72 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <circle fill="#382314" cx="48" cy="24" r="24" />
            <circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23" />
          </g>
        </svg>
      </div>


      <div className="card__chart">
        <h2>Spending - Last 7 days</h2>
        <div className="card__chart-bar">
          {/* Here goes the bars */}
          {/* bottom border */}
          { Data.map((chart, index) => (
            <Chart amount={chart.amount} day={chart.day} key={index}/>
          ))}
        </div>
        <div className="card__chart-summary">
        <div className="card__chart-figure">
          <p >Total this month</p>
          <p className="bold-figure">$478.33</p>
        </div>
        <div className="card__chart-date">
          <p>+2.4%</p>
          <p>from last month</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
