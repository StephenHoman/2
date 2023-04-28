import React from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { addToCart } from './cartSlice';

function SuppliesCard({ supply }) {
  const { name, price, description, dimensions, colors, material } = supply;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: supply.id, name, description, price }));
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
          <strong>Dimensions:</strong>
          <ul>
            <li>Height: {dimensions.height}</li>
            <li>Width: {dimensions.width}</li>
            <li>Depth: {dimensions.depth}</li>
          </ul>
        </Card.Text>
        <Card.Text>
          <strong>Colors:</strong> {colors.join(", ")}
        </Card.Text>
        <Card.Text>
          <strong>Material:</strong> {material}
        </Card.Text>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default SuppliesCard;
