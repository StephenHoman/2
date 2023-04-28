import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bookData from '../inventory/books.json';
import BooksCard from '../universalComponents/BooksCard';

function Books() {
  const textbooks = bookData.textbooks;

  return (
    <div>
      <h1>Textbooks</h1>
      <p>This is the Textbooks page!</p>

      <Container fluid>
        <Row>
          {textbooks.map((textbook) => (
            <Col xs={12} sm={6} md={4} key={textbook.title}>
              <BooksCard textbook={textbook} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Books;
