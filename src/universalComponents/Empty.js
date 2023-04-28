import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import styles from './universal.modules.css';

function Empty() {
return (
<div>
<Container className={styles['Empty-card']}>
<Card >
<Card.Body>
<Card.Title >Whoops, no items</Card.Title>
<Card.Text >
There are no items to display at this time.
</Card.Text>
</Card.Body>
</Card>
</Container>
</div>
);
}

export default Empty;