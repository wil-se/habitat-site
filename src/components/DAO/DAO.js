import { Container, Row, Col, Card } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


function DAO() {

  return (
    <Container fluid className="pt-4">
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={12} className="text-center my-5">
          <h1>🌐</h1>
          <h1>DAO</h1>
        </Col>
        <Col xs={12} lg={7} className="d-flex justify-content-center my-5">
          <Card>
            <Card.Title className="text-center">
              <h3>Connect with the best professionals</h3>
            </Card.Title>
            <Card.Body className="d-flex justify-content-center">
              HABITAT Studio will initially find collaborators, sponsors, studios text text text text text text text text text text text text text text text text text text text text text text text text ...
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={7} className="d-flex justify-content-center my-5">
          <Card>
            <Card.Title className="text-center">
              <h3>Free access to the metavexpo</h3>
            </Card.Title>
            <Card.Body className="d-flex justify-content-center">
              HABITAT Studio will initially find collaborators, sponsors, studios text text text text text text text text text text text text text text text text text text text text text text text text ...
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DAO;
