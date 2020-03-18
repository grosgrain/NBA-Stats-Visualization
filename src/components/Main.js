import React from 'react';
import nba from 'nba';
import { Profile } from "./Profile";
import {DEFAULT_PLAYER_INFO} from "../constants"

export class Main extends React.Component {
    state = {
        playerInfo: DEFAULT_PLAYER_INFO
    }

    componentDidMount() {
        this.loadPlayerInfo(this.state.playerInfo.playerName);
    }

    loadPlayerInfo = (playerName) => {
        console.log(nba.findPlayer(playerName))
        const id = nba.findPlayer(playerName).playerId;
        nba.stats.playerInfo({PlayerID: id}).then(
            (info) => {
                const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
                this.setState({
                    playerInfo: playerInfo
                });
            }
        );
    }

    render() {
        return (
            <div className="main">
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo}/>
                </div>
            </div>
        );
    }
}
