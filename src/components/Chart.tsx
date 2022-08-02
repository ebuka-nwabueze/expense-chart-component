import React, { useState } from "react";

import "./chart.css";
import { ChartInfo } from "../types/chartTypes";

function Chart({ amount, day }: ChartInfo) {
  const [onHover, setOnHover] = useState(false)

  const handleMouse = () => {
    setOnHover((prev)=> !prev)
  }

  const styles = onHover ? {
    display: "block",
    bottom: `calc(${amount + 20}%)`
  } as React.CSSProperties : {}

  return (
    <div className="bar__chart" onMouseEnter={handleMouse} onMouseLeave={handleMouse}>
      <span className="bar__chart-amount" style={styles}>${amount}</span>
      <div className="bar__chart-height" style={{ height: `${amount}%` }}></div>
      <p className="bar__chart-day">{day}</p>
    </div>
  );
}

export default Chart;
