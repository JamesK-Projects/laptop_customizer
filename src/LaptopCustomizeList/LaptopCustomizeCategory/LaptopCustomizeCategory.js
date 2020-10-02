import React, { Component } from 'react';
import LaptopItem from './LaptopItem/LaptopItem';

class LaptopCustomizeCategory extends Component {
    render() { 
        return (
            <div>
                <fieldset className="feature">
                    <legend className="feature__name">
                        <h3>{this.props.feature}</h3>
                    </legend>
                </fieldset>
                {
                    this.props.items.map((item, index) => {
                        return (
                            <LaptopItem 
                                selected={this.props.selected}
                                updateFeature={this.props.updateFeature}
                                item={item}
                                feature={this.props.feature}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
 
export default LaptopCustomizeCategory;