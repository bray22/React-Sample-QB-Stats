//Last Updated: Ben Ray 1/18/22
import React, { Component } from "react";

import '../styles/quarterback.scss'
import QuarterbacksList from "./QuarterbacksList";
import QuarterbackStats from "./QuarterbackStats";
import playerServices from "../services/playerServices";
import * as constants from "../constants/playerConstants.js";

class Quarterbacks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      quarterbacks: [],
      selectedQb: {},
      qbStats: []
    };
  }

  componentDidMount = () => {
    
    /*
    playerServices
        .fetchPlayers()
        .then((res) => res.json())
        .then((result) => {
        return result;
      })
      .then(
        (result) => {
       
        result.map((player, i) => {
          if (i === 0) this._selectQuarterback(player);
        });

        this.setState({
          quarterbacks: result
        });
      },

         (error) => {}
    );
    */

    constants.PLAYERS.map((player, i) => {
      if (i === 0) this._selectQuarterback(player);
    });

    this.setState({
      quarterbacks: constants.PLAYERS
    });
  };

  _selectQuarterback = (player) => {
    let playerData = 0;
    if (player.fullName=="Derek Carr") {
      playerData = constants.CARR;
    } else if (player.fullName=="Blake Bortles") {
      playerData = constants.BORTLES;
    } else if (player.fullName=="Baker Mayfield") {
      playerData = constants.MAYFIELD;
    }

    this.setState({
      selectedQb: playerData[0],
      qbStats: playerData
    })

    // get stats
    /*
    playerServices
        .fetchPlayer(player.playerId)
        .then((res) => res.json())
        .then((result) => {
        return result;
      })
      .then(
        (result) => {
        
        result.map((week) => {
          week.YdsPrAtt = week.PsYds / week.Att;
          week.CmpPcnt = (week.Cmp * 100) / week.Att;
        });

        console.log(result);

        this.setState({
          qbStats: result
        });
      },
      (error) => {}
    );
    */
    playerData.map((week) => {
      week.YdsPrAtt = week.PsYds / week.Att;
      week.CmpPcnt = (week.Cmp * 100) / week.Att;
    });

    this.setState({
      qbStats: playerData
    });
  }

  render = () => {
    const {
      quarterbacks,
      selectedQb,
      qbStats
    } = this.state;
    return (
      <>
        <div className="quarterback-wrapper">
          <h2>Quarterback Stats</h2>
          <div className="quarterback-view">
              <div className="quarterback-list">
                <QuarterbacksList 
                  quarterbacks={quarterbacks}
                  selectPlayer={(player) => this._selectQuarterback(player)}
                  selectedQb={selectedQb}
                />
              </div>
              <div className="quarterback-stats">
                <QuarterbackStats
                  qbStats={this.state.qbStats}
                  quarterback={selectedQb}
                />
              </div>
          </div>
        </div>
      </>
    );
  };
}

export default Quarterbacks;
