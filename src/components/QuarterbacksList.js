//Last Updated: Ben Ray 1/13/22
import React, { useState, useEffect } from "react";

const QuarterbacksList = ({ quarterbacks, selectPlayer, selectedQb }) => {

  return (
    <>
      <div className="quarterbacks">
        {quarterbacks && quarterbacks.map((player, i) => (
          <div className={`quarterback ${player.playerId === selectedQb.playerId ? 'selected' : ''} `} 
          onClick={() => selectPlayer(player)} key={i}>
            <div className="photo"><img src={ player.playerImage }></img></div>
            <div className="name">{player.fullName}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default QuarterbacksList;
