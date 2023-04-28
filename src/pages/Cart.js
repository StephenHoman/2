import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../universalComponents/CartItem';
import CartFooter from '../universalComponents/CartFooter';
import Footer from '../HomePage/Footer';
import Empty from '../universalComponents/Empty';
function Cart( ) {
  const cartItems = useSelector(state => state.cart.cart.items)

  return (
    <div>
      <h1>Cart</h1>
      <p>This is the Cart page!</p>
      {cartItems.length ? (
        cartItems.map(item => (
          <CartItem key={item.name} item={item} />
        ))
      ) : (
        <Empty message="Whoops, no items in your cart!" />
      )}
      <CartFooter/>
      <Footer /> 
    </div>
  );
}

export default Cart;
