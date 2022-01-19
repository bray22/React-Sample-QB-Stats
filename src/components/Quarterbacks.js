//Last Updated: Ben Ray 1/18/22
import React, { Component } from "react";

import '../styles/quarterback.scss'
import QuarterbacksList from "./QuarterbacksList";
import QuarterbackStats from "./QuarterbackStats";
import playerServices from "../services/playerServices";

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
  };

  _selectQuarterback = (player) => {
    this.setState({
      selectedQb: player
    })

    // get stats
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
