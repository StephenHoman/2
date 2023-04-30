import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Homepage.module.css';
import Imgcard1 from '../universalComponents/imgcard1';
import laptop from '../Photos/laptop.jpg';
import supplies from '../Photos/supplies.jpg';
import clothes from '../Photos/clothes.jpg';
import books from '../Photos/books.jpg';

function MainPageContainer() {
  return (
    <Container data-cy="main-page-container" fluid className={styles['Container-style']}>
      <Row className="justify-content-center">
        <Col  xs lg="6">
          <Imgcard1 src={laptop} title="Computers" text="Browse Computers" route="/computers"/>
        </Col>
       
       
        <Col xs lg="6">
        <Imgcard1 src={supplies} title="School supplies" text="Assorted writing tools" route="/supplies"/>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col  xs lg="6">
          <Imgcard1 src={clothes} title="University Apparel" text="Browse branded clothes" route="/apparel"/>
        </Col>
       
       
        <Col xs lg="6">
        <Imgcard1 src={books} title="Books" text="Get required course material here!" route="/books"/>
        </Col>
      </Row>
    </Container>
  );
}

export default MainPageContainer;