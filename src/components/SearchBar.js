import React from "react";
import nba from "nba";
import {AutoComplete, Input} from "antd";
import { SearchOutlined } from '@ant-design/icons';
import {PROFILE_PIC_URL_PREFIX} from "../constants";

const Option = AutoComplete.Option;

export class SearchBar extends React.Component{
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(({fullName, playerId}) =>
                <Option key={playerId} value={fullName}>
                    <img
                        className="player-option-pic"
                        src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
                        alt="Profile"
                    />
                    <span className="player-option-label">{fullName}</span>
                </Option>
            )

        });
    }

    onSelect = (name) => {
        this.props.handleSelectPlayer(name);
    }

    render() {
        const {dataSource} = this.state;
        return (
            <AutoComplete
                className="search-bar"
                dataSource={dataSource}
                size="large"
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA Player"
            >
                <Input suffix={<SearchOutlined className="certain-category-icon"/>}/>
            </AutoComplete>
        );
    }
}
