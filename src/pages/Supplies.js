import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import supplyData from '../inventory/supplies.json';
import SupplyCard from '../universalComponents/SupplyCard';

function Supplies() {
  const supplies = supplyData.supplies;

  return (
    <div>
      <h1>Supplies</h1>
      <p>This is the Supplies page!</p>

      <Container fluid>
        <Row>
          {supplies.map((supply) => (
            <Col xs={12} sm={6} md={4} key={supply.name}>
              <SupplyCard supply={supply} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Supplies;
