import React from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { addToCart } from './cartSlice';

function ComputerCard({ computer }) {
  const { name, price, description, specs } = computer;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: computer.id, name, description, price }));
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <strong>Price:</strong> ${price}
        </Card.Text>
        <Card.Text>
          <strong>Specifications:</strong>
        </Card.Text>
        <ul>
          <li>Processor: {specs.Processor}</li>
          <li>RAM: {specs.RAM}</li>
          <li>Storage: {specs.Storage}</li>
          <li>Display: {specs.Display}</li>
        </ul>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ComputerCard;
