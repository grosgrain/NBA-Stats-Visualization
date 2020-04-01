import React from 'react';
import nba from 'nba';
import { Profile } from "./Profile";
import {SearchBar} from "./SearchBar";
import {DataViewContainer} from "./DataViewContainer";
import {DEFAULT_PLAYER_INFO} from "../constants"
import {stats} from "../utils/transportURL"

export class Main extends React.Component {
    state = {
        playerInfo: DEFAULT_PLAYER_INFO
    }

    componentDidMount() {
        this.loadPlayerInfo(this.state.playerInfo.playerName);
    }

    handleSelectPlayer = (name) => {
        this.loadPlayerInfo(name);
    };

    loadPlayerInfo = (playerName) => {
        const id = nba.findPlayer(playerName).playerId;
        stats.playerInfo({PlayerID: id}).then(
            (info) => {
                const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
                console.log(info);
                this.setState({
                    playerInfo: playerInfo
                });
            }
        );
    }

    render() {
        return (
            <div className="main">
                <SearchBar handleSelectPlayer={this.handleSelectPlayer}/>
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo}/>
                    <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                </div>
            </div>
        );
    }
}
