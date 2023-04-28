import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';

function BooksCard({ textbook }) {
  const { title, author, price, edition, publisher, format, isbn, categories } = textbook;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: textbook.id, name: title, description: author, price }));
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
        <Card.Text>Price: ${price}</Card.Text>
        <Card.Text>Edition: {edition}</Card.Text>
        <Card.Text>Publisher: {publisher}</Card.Text>
        <Card.Text>ISBN: {isbn}</Card.Text>
        <Card.Text>Format: {format}</Card.Text>
        <Card.Text>
          Categories:{' '}
          {categories.map((category) => (
            <span key={category} className="badge bg-secondary mx-1">
              {category}
            </span>
          ))}
        </Card.Text>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default BooksCard;
