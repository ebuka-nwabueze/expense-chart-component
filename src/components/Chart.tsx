import React from "react";
import "./chart.css";
import { ChartInfo } from "../types/chartTypes";

function Chart({ amount, day }: ChartInfo) {
  return (
    <div className="bar__chart">
      <span className="bar__chart-amount">${amount}</span>
      <div className="bar__chart-height" style={{ height: `${amount}%` }}></div>
  <p className="bar__chart-day">{day}</p>
    </div>
  );
}

export default Chart;
