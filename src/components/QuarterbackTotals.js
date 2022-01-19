//Last Updated: Ben Ray 1/13/22
import React, { useState, useEffect } from "react";

const QuarterbackTotals = ({ qbStats }) => {
  let tableHeaders = ['G', 'ATT', 'COMP', 'PCT', 'YDS', 'YDS/ATT', 'TD', 'INT', 'SACK'];

  useEffect(() => {
    calculateTotals();
  });

  const calculateTotals = () => {
    const totalsObj = {}
    //totalsObj.totalYards = 2000;
    totalsObj.totalAttempts = 25;
    totalsObj.totalCompletions = 20;
    totalsObj.totalAttempts = qbStats.reduce((sum, current) => { return sum + current.Att }, 0);
    totalsObj.totalCompletions = qbStats.reduce((sum, current) => { return sum + current.Cmp }, 0);
    totalsObj.totalCompPercent = qbStats.reduce((sum, current) => { return sum + current.CmpPcnt }, 0);
    totalsObj.totalYardsPerAttempt = qbStats.reduce((sum, current) => { return sum + current.YdsPrAtt }, 0);
    totalsObj.totalTouchdowns = qbStats.reduce((sum, current) => { return sum + current.PsTD }, 0);
    totalsObj.totalInterceptions = qbStats.reduce((sum, current) => { return sum + current.Int }, 0);
    totalsObj.totalSacks = qbStats.reduce((sum, current) => { return sum + current.Sack }, 0);
    totalsObj.totalYards = qbStats.reduce((sum, current) => { return sum + current.PsYds }, 0);
    totalsObj.games = qbStats.length;


    return totalsObj;
  }

  return (
    <>
      <div className="quarterback-total">
        <div className="headers">
          {tableHeaders && tableHeaders.map((header, i) => (
            <div className="header">{header}</div>
          ))}
        </div>
        <div className="data-cells">
          <div className="data-cell">{calculateTotals().games}</div>
          <div className="data-cell">{calculateTotals().totalAttempts}</div>
          <div className="data-cell">{calculateTotals().totalCompletions}</div>
          <div className="data-cell">{( (calculateTotals().totalCompletions*100) /calculateTotals().totalAttempts).toFixed(1)}%</div>
          <div className="data-cell">{calculateTotals().totalYards}</div>
          <div className="data-cell">{(calculateTotals().totalYards / calculateTotals().totalAttempts).toFixed(1)}</div>
          <div className="data-cell">{calculateTotals().totalTouchdowns}</div>
          <div className="data-cell">{calculateTotals().totalInterceptions}</div>
          <div className="data-cell">{calculateTotals().totalSacks}</div>
        </div>
      </div>
    </>
  );
};

export default QuarterbackTotals;
