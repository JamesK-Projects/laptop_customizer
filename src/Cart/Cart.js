import React from 'react';
import CartItem from './CartItem/CartItem';

function Cart(props){
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
    );
    return (
        <div>
            <section className="main__summary">
                <h2>Your cart</h2>
                {
                    Object.entries(props.selected).map((items) =>{
                        return(
                            <CartItem 
                            selected={props.selected}
                            features={props.features}
                            items={items}
                            />
                        )
                    })  
                }
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {USCurrencyFormat.format(total)}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart;