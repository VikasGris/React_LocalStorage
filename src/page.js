import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Page = (props) => {
  return (
    <div className="container">

      
      <Row xs="1" sm="2" md="4">
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
        <Col>Column</Col>
      </Row>
    
    </div>

   
  );
}

export default Page;