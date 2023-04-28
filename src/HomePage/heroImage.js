 
import Card from 'react-bootstrap/Card';
import styles from './Homepage.module.css';
import img from '../Photos/library.jpg';

function Heroimage() {
  return (
    <>
      <Card className={styles['Hero']}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Text className={styles['Hero-text']}>
            Welcome to the book store, buy online today!   
          </Card.Text>
        </Card.Body>
      </Card>
  
    </>
  );
}

export default Heroimage;