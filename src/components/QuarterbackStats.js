//Last Updated: Ben Ray 1/13/22
import React, { useState, useEffect, useRef } from "react";

import QuarterbackTotals from "./QuarterbackTotals";
import QuarterbackGamelog from "./QuarterbackGamelog";
import LineGraph from "./LineGraph";


const QuarterbackStats = ({ quarterback, qbStats }) => {
  const chart = useRef();

  return (
    <>
      <div className="quarterback-stats-wrapper">
        <div className="quarterback">
          <img src={ quarterback.playerImage }></img>
          <div className="player-info">
            <div className="name">
              {quarterback.fullName} | QB
            </div>
            <div className="totals">
              <h3>This Season</h3>
              <QuarterbackTotals qbStats={qbStats} />
            </div>
          </div>
        </div>
        <h3>Weekly stats</h3>
        <div className="charts">
          <div className="left">
            <LineGraph qbStats={qbStats} metric="YdsPrAtt" />
          </div>
          <div className="right">
            <LineGraph qbStats={qbStats} metric="CmpPcnt" />
          </div>
        </div>
      </div>
      <div className="gamelog">
         <QuarterbackGamelog qbStats={qbStats} />
      </div>
    </>
  );
};

export default QuarterbackStats;
