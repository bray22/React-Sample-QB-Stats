//Last Updated: Ben Ray 1/13/22
import React, { useState, useEffect } from "react";

const QuarterbackGamelog = ({ qbStats }) => {
  let tableHeaders = ['WEEK', 'ATT', 'COMP', 'PCT', 'YDS', 'YDS/ATT', 'TD', 'INT', 'SACK'];

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
    <div className="gamelog-wrapper">
      <h3>Gamelog</h3>
      <div className="quarterback-total">
        
        <div className="headers">
          {tableHeaders && tableHeaders.map((header, i) => (
            <div className="header">{header}</div>
          ))}
        </div>
        
          {qbStats && qbStats.map((game, i) => (
            <>
            <div className="data-cells">
              <div className="data-cell">{game.week}</div>
              <div className="data-cell">{game.Att}</div>
              <div className="data-cell">{game.Cmp}</div>
              <div className="data-cell">{game.CmpPcnt.toFixed(1)}</div>
              <div className="data-cell">{game.PsYds}</div>
              <div className="data-cell">{game.YdsPrAtt.toFixed(1)}</div>
              <div className="data-cell">{game.PsTD}</div>
              <div className="data-cell">{game.Int}</div>
              <div className="data-cell">{game.Sack}</div>
            </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuarterbackGamelog;
