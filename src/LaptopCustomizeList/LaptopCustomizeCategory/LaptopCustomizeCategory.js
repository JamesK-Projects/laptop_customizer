import React, { Component } from 'react';
import LaptopItem from './LaptopItem/LaptopItem';

class LaptopCustomizeCategory extends Component {
    render() { 
        //const features = Object.keys(this.props.features).map((feature, idx) => {
            return (
                <div>
                    <fieldset className="feature" 
                    //key={featureHash}
                    >
                        <legend className="feature__name">
                            <h3>{this.props.feature}</h3>
                        </legend>
                    </fieldset>
                    {
                        this.props.items.map((item) => {
                            return <LaptopItem 
                                selected={this.props.selected}
                                updateFeature={this.props.updateFeature}
                                item={item}
                                feature={this.props.feature}
                    />
                        })
                    }
                    
                </div>
            );
        //})
        
    }
}
 
export default LaptopCustomizeCategory;