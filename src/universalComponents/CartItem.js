import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>
          <strong>Price:</strong> ${item.price}
        </Card.Text>
        <Button onClick={() => handleRemoveFromCart(item)}>
          Remove from Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CartItem;
