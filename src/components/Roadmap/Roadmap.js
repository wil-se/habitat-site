import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function Roadmap() {

  return (
    <Container fluid className="pt-4">
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={12} className="text-center my-5">
          <h1>🛣️</h1>
          <h1>Roadmap</h1>
        </Col>
        <Col xs={12} lg={7} className="d-flex justify-content-center my-5">
          <Card>
            <Card.Title className="text-center">
              <h3>Marketing & Partnerships</h3>
            </Card.Title>
            <Card.Body className="d-flex justify-content-center">
              HABITAT Studio will initially find collaborators, sponsors, studios text text text text text text text text text text text text text text text text text text text text text text text text ...
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={7} className="d-flex justify-content-center mb-5">
          <Card>
            <Card.Title className="text-center">
              <h3>Mint the first collection</h3>
            </Card.Title>
            <Card.Body className="d-flex justify-content-center">
              The first collection will be minted text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ...
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={7} className="d-flex justify-content-center mb-5">
          <Card>
            <Card.Title className="text-center">
              <h3>Airdrop</h3>
            </Card.Title>
            <Card.Body className="d-flex justify-content-center">
              Some tokens will be airdropped to the owner of the first collection text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ...
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Roadmap;
