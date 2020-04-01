import React from 'react';
import { ShotChart } from './ShotChart';
import {CountSlider} from "./CountSlider"
import _ from 'lodash';

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
        displayToolTips: true
    }

    onCountSliderChange = (minCount) => {
        this.setState({
            minCount
        });
    }

    render() {
        const { minCount, chartType, displayToolTips } = this.state;
        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={minCount}
                    chartType={chartType}
                    displayToolTips={displayToolTips}
                />
                {
                    chartType === "hexbin" ?
                        <CountSlider
                            value={minCount}
                            onCountSliderChange={_.debounce(this.onCountSliderChange, 500)}
                        /> : null
                }
            </div>
        );
    }
}
