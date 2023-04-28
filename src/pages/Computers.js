import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import computerData from '../inventory/computers.json';
import ComputerCard from '../universalComponents/ComputerCard';

function Computers() {
  const computers = computerData.computers;

  return (
    <div>
      <h1>Computers</h1>
      <p>This is the Computers page!</p>

      <Container fluid>
        <Row>
          {computers.map((computer) => (
            <Col xs={12} sm={6} md={4} key={computer.name}>
              <ComputerCard computer={computer} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Computers;
