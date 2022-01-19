//Last Updated: Ben Ray 1/18/22
import * as constants from "../constants/playerConstants.js";

/* get all players */
const fetchPlayers = async () => {
  try {
    const results = fetch(`${constants.TRUMEDIA_PROJECT_BASE_URL}/api/nfl/players`, {
        method: 'get', 
        headers: new Headers( {'tempToken': constants.API_TOKEN} )
    });
    return results;
  } catch (err) {
    return `Error: ${err}`;
  }
};

const fetchPlayer = async (playerId=2543477) => {
  try {
    const results = fetch(`${constants.TRUMEDIA_PROJECT_BASE_URL}/api/nfl/player/${playerId}`, {
        method: 'get', 
        headers: new Headers( {'tempToken': constants.API_TOKEN} )
    });
    return results;
  } catch (err) {
    return `Error: ${err}`;
  }
};


const playerServices = {
  fetchPlayer,
  fetchPlayers
};

export default playerServices;
