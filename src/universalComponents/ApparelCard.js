import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

function ApparelCard({ apparel }) {
  const { id, name, price, description, sizes, colors, image_url } = apparel;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, description, price }));
  };

  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <strong>Price:</strong> ${price}
        </Card.Text>
        <Card.Text>
          <strong>Available Sizes:</strong> {sizes.join(', ')}
        </Card.Text>
        <Card.Text>
          <strong>Available Colors:</strong> {colors.join(', ')}
        </Card.Text>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ApparelCard;
