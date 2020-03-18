import React from "react";
import logo from "../assets/images/nba-logoman-word-white.svg"


export class TopNavBar extends React.Component{
    render() {
        return (
            <header className="App-header">
                <img src={logo} alt="logo" className="App-logo"/>
            </header>
        );
    }
}

export const TEAM_PICK_URL_PREFIX = 'https://stats.nba.com/media/img/teams/logos';
