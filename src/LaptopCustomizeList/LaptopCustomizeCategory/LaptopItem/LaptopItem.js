import React from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

function LaptopItem(props){
    return (
        <div className="feature__item" onClick={e => props.updateFeature(props.feature, props.item)}>
              <input
                type="radio"
                className="feature__option"
                name={props.item.name}
                checked={props.item.name === props.selected[props.feature].name}
                
              />
              <label className="feature__label">
                {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
              </label>
            </div>
    )
}
 
export default LaptopItem;