import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../actions/cartActions';

function Item({ item }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}

export default Item;