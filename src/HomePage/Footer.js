import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Homepage.module.css';
function Footer() {
    return (
        
          <Container className={styles['Footer-Container-style']}>
            <Row>
              <Col>
                <p>Concordia St. Paul</p>
              </Col>
              <Col>
                <p> </p>
              </Col>
            </Row>
          </Container>
        
      );
    }
export default Footer