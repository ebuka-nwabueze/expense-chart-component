import React, { useState } from "react";

import "./chart.css";
import { ChartInfo } from "../types/chartTypes";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

function Chart({ amount, day }: ChartInfo) {
  const [onHover, setOnHover] = useState(false)

  const handleMouse = () => {
    setOnHover((prev)=> !prev)
  }

  const handleMouseOut = () => {
    setOnHover((prev)=> !prev)
    // setOnHover(false)
  }

  const styles = onHover ? {
    display: "block",
    bottom: `calc(${amount + 20}%)`
  } as React.CSSProperties : {}

  // React.MouseEvent<HTMLDivElement, MouseEvent>
  return (
    <div className="bar__chart" onMouseEnter={handleMouse} onMouseLeave={handleMouseOut}>
      {/* <span className="bar__chart-amount" style={{
        display: onHover ? "hidden" : "hidden"
      }}>${amount}</span> */}
      <span className="bar__chart-amount" style={styles}>${amount}</span>
      <div className="bar__chart-height" style={{ height: `${amount}%` }}></div>
      <p className="bar__chart-day">{day}</p>
    </div>
  );
}

export default Chart;
