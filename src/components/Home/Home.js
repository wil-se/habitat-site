import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import MainModel from "./MainModel"

// https://pixabay.com/illustrations/vr-virtual-reality-vr-goggles-6770800/

function Home() {
  return (
    <>

      <Container>
        <Row className="pt-5 mx-0 mt-3 justify-content-center">
          <Col xs={12} md={8}>
            <h1 className="text-center"><b>Coming 🔜..</b></h1>
          </Col>
          <Col xs={12} style={{ height: window.innerWidth > 600 ? '600px' : 'auto', width: window.innerWidth > 600 ? '70%' : '100%' }} className='d-flex justify-content-center'>
            <MainModel className='d-flex justify-content-center' />
          </Col>
          {/* <Col xs={12} >
          <iframe style={{ height: '600px', width: '1000px' }} src="https://www.spatial.io/s/habitat-62c8daae0d0b1c00013771cf?share=5608793999292313744" allow="microphone https://spatial.io; camera https://spatial.io"></iframe>
        </Col> */}
          <Col xs={12}>
            <Card className='my-5'>
              <Card.Title className='text-center'>
                <h2>⁉️</h2>
                <h2>What is Habitat Studio?</h2>
              </Card.Title>
              <Card.Body className='text-center'>
                <p>At Habitat Studio we want to bring the intimacy of the hearth in the digital world. In order to do that we believe that the first step is bringing the years of experience of skilled designers to the metaverse, as well as helping and promoting the ones that want to craft themselves the items to tailor their own digital homes.</p>
              </Card.Body>
              <Card.Footer className='text-center'>
                <Button className='m-2'>📜 Whitepaper</Button>
                <Button className='m-2'>📑 Litepaper</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} className='text-center'>
            <Card className='my-5'>
              <Card.Title className='text-center'>
                <h1>🏘️</h1>
                <h2>Visit our collection in the metaverse</h2>
              </Card.Title>
              <Card.Body className='text-center'>
                <iframe title="spatial" style={{ height: '600px', width: '100%' }} src="https://www.spatial.io/s/habitat-62c8daae0d0b1c00013771cf?share=5608793999292313744" allow="microphone https://spatial.io; camera https://spatial.io"></iframe>
              </Card.Body>
              <Card.Footer className='text-center'>
                <Button className='m-2'>🚶 Info</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default Home;