import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import apparelData from '../inventory/apparel.json';
import ApparelCard from '../universalComponents/ApparelCard';

function Apparel() {
  const apparel = apparelData.apparel;

  return (
    <div>
      <h1>Apparel</h1>
      <p>This is the Apparel page!</p>

      <Container fluid>
        <Row>
          {apparel.map((apparel) => (
            <Col xs={12} sm={6} md={4} key={apparel.name}>
              <ApparelCard apparel={apparel} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Apparel;
