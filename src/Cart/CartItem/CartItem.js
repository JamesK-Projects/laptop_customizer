import React from 'react';

function CartItem(props){
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return (
        <div>
            <div className="summary__option">
                <div className="summary__option__label">{props.items[0]} </div>         
                <div className="summary__option__value">{props.items[1].name}</div>
                <div className="summary__option__cost">
                    {USCurrencyFormat.format(props.items[1].cost)}
                </div>    
            </div>
        </div>
    )    
}

export default CartItem;