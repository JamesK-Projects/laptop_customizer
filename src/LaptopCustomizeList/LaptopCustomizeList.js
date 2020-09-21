import React, { Component } from 'react';
import LaptopCustomizeCategory from './LaptopCustomizeCategory/LaptopCustomizeCategory';

class LaptopCustomizeList extends Component {
    render() { 
        return (
            <div>
                <h2>Customize your laptop</h2>
                {
                    Object.keys(this.props.features).map((feature) => {
                        return(
                            <LaptopCustomizeCategory 
                                selected={this.props.selected}
                                updateFeature={this.props.updateFeature}
                                feature={feature}
                                items={this.props.features[feature]}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
 
export default LaptopCustomizeList;