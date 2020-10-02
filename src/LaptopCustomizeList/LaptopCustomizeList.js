import React, { Component } from 'react';
import LaptopCustomizeCategory from './LaptopCustomizeCategory/LaptopCustomizeCategory';
import features from './features';


class LaptopCustomizeList extends Component {
    render() { 
        return (
            <div>
                <h2>Customize your laptop</h2>
                {
                    Object.keys(features).map((feature, index) => {
                        return(
                            <LaptopCustomizeCategory 
                                selected={this.props.selected}
                                updateFeature={this.props.updateFeature}
                                feature={feature}
                                items={features[feature]}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
 
export default LaptopCustomizeList;