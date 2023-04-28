import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './universal.modules.css';
function Imgcard1(props) {
  return (
    <Card className={styles['Card-style']} >
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary" href={props.route}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Imgcard1;