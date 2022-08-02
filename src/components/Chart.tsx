import React, { useState } from "react";

import "./chart.css";
import { ChartInfo } from "../types/chartTypes";

function Chart({ amount, day }: ChartInfo) {
  const [onHover, setOnHover] = useState(false)

  const handleMouse = () => {
    setOnHover((prev)=> !prev)
  }

  const handleMouseOut = () => {
    setOnHover((prev)=> !prev)
    // setOnHover(false)
  }

  // React.MouseEvent<HTMLDivElement, MouseEvent>
  return (
    <div className="bar__chart" onMouseEnter={handleMouse} onMouseLeave={handleMouseOut}>
      <span className="bar__chart-amount" style={{
        display: onHover ? "block" : "none"
      }}>${amount}</span>
      <div className="bar__chart-height" style={{ height: `${amount}%` }}></div>
  <p className="bar__chart-day">{day}</p>
    </div>
  );
}

export default Chart;
