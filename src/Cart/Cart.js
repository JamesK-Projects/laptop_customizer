import React from 'react';
import CartItem from './CartItem/CartItem';

function Cart(){
    return (
        <div>
            <section className="main__summary">
            <h2>Your cart</h2>
            <CartItem 
                selected={this.state.selected}
            />
          </section>
        </div>
    )
    
}

export default Cart;