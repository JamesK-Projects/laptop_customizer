import React from 'react';

function CartItem(){
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    const total = Object.keys(this.props.selected).reduce(
        (acc, curr) => acc + this.state.selected[curr].cost,
        0
    );
    for (let i = 0; i < this.props.selected.length; i++){
        return (
            <div>
                <div className="summary__option" 
                    //key={featureHash}
                >
                
                    <div className="summary__option__label">{this.props.selected[i]} </div>
                    <div className="summary__option__value">{this.props.selected[i].name}</div>
                    <div className="summary__option__cost">
                        {USCurrencyFormat.format(this.props.selected[i].cost)}
                    </div>
                </div>
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {USCurrencyFormat.format(total)}
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem;