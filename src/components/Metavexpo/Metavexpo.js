import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


function Metavexpo() {

  return (
    <Container fluid className="pt-4">
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={12} className="text-center my-5">
          <h1>🔮</h1>
          <h1>MetavEXPO</h1>
        </Col>
        <Col xs={12} lg={7} className="d-flex justify-content-center my-5">
          <Card>
            <Card.Title className="text-center">
              <h3>Come and see</h3>
            </Card.Title>
            <Card.Body className="d-flex justify-content-center">
              <iframe title="spatial" style={{ height: '600px', width: '1000px' }} src="https://www.spatial.io/s/habitat-62c8daae0d0b1c00013771cf?share=5608793999292313744" allow="microphone https://spatial.io; camera https://spatial.io"></iframe>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Metavexpo;
