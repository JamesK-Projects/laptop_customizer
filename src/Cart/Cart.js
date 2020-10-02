import React from 'react';
import CartItem from './CartItem/CartItem';
import Total from './Total/Total';

function Cart(props){
    return (
        <div>
            <section className="main__summary">
                <h2>Your cart</h2>
                {
                    Object.entries(props.selected).map((items, index) =>{
                        return(
                            <CartItem 
                                selected={props.selected}
                                items={items}
                                key={index}
                            />
                        )
                    })  
                    
                }
                <Total 
                    selected={props.selected}
                />
            </section>
        </div>
    )
}

export default Cart;