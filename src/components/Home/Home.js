import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import MainModel from "./MainModel"

// https://pixabay.com/illustrations/vr-virtual-reality-vr-goggles-6770800/

function Home(props) {
  return (
    <>
      <Container className={`${props.dark ? 'dark' : ''}`}>
        <Row className="pt-5 mx-0 mt-3 justify-content-center">
          <Col xs={12} md={8} className="my-5">
            <h1 className="text-center"><b>Coming 🔜 ..</b></h1>
          </Col>
          <Col xs={12} style={{ height: window.innerWidth > 600 ? '600px' : '300px', width: window.innerWidth > 600 ? '70%' : '100%' }} className='d-flex justify-content-center'>
            <MainModel dark={props.dark} className='d-flex justify-content-center' />
          </Col>
          {/* <Col xs={12} >
          <iframe style={{ height: '600px', width: '1000px' }} src="https://www.spatial.io/s/habitat-62c8daae0d0b1c00013771cf?share=5608793999292313744" allow="microphone https://spatial.io; camera https://spatial.io"></iframe>
        </Col> */}
          <Col xs={12}>
            <Card className={`my-5 ${props.dark ? 'dark' : ''}`} >
              <Card.Title className={`text-center ${props.dark ? 'dark-title' : ''}`}>
                <h2>⁉️</h2>
                <h2>What is Habitat Studio?</h2>
              </Card.Title>
              <Card.Body className='text-center'>
                <p>At Habitat Studio we want to bring the intimacy of the hearth in the <b>digital world</b>. In order to do that we believe that the first step is bringing the years of experience of <b>skilled designers</b> to the <b>metaverse</b>, as well as helping and promoting the ones that want to craft themselves the items to <b>tailor</b> their own <b>digital homes.</b></p>
              </Card.Body>
              <Card.Footer className={`text-center ${props.dark ? 'dark' : ''}`}>
                <Button href="/docs" className='m-2'>📜 Read Docs</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} className='text-center'>
            <Card className={`my-5 ${props.dark ? 'dark' : ''}`}>
              <Card.Title className={`text-center ${props.dark ? 'dark-title' : ''}`}>
                <h1>🏘️</h1>
                <h2>Visit our collection in the metaverse</h2>
              </Card.Title>
              <Card.Body className='text-center'>
                {/* <iframe title="spatial" style={{ height: '600px', width: '100%' }} src="https://www.spatial.io/s/habitat-62c8daae0d0b1c00013771cf?share=5608793999292313744" allow="microphone https://spatial.io; camera https://spatial.io"></iframe> */}
              </Card.Body>
              <Card.Footer className={`text-center ${props.dark ? 'dark' : ''}`}>
                <Button href="/metavexpo" className='m-2'>🏃 Go!</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} className='text-center'>
            <Card className={`my-5 ${props.dark ? 'dark' : ''}`}>
              <Card.Title className={`text-center ${props.dark ? 'dark-title' : ''}`}>
                <h1>💰</h1>
                <h2>BUY $HABI</h2>
              </Card.Title>
              <Card.Body className='text-center'>
                {/* <iframe title="spatial" style={{ height: '600px', width: '100%' }} src="https://www.spatial.io/s/habitat-62c8daae0d0b1c00013771cf?share=5608793999292313744" allow="microphone https://spatial.io; camera https://spatial.io"></iframe> */}
              <h3>Mint and hold at least 3 $HABI to be part of the DAO!</h3>
              <h4>Or mint a furniture collection to receve your Airdrop.</h4>
              <br/>
              <p>Token address: 0x5b9fF45283eC291a25495953F1E80007bE66F49F</p>
              </Card.Body>
              <Card.Footer className={`text-center ${props.dark ? 'dark' : ''}`}>
                <Button href="/habi" className='m-2'>ℹ️ Info</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} className='text-center'>
            <Card className={`my-5 ${props.dark ? 'dark' : ''}`}>
              <Card.Title className={`text-center ${props.dark ? 'dark-title' : ''}`}>
                <h1>🏙️</h1>
                <h2>MetavEXPO</h2>
              </Card.Title>
              <Card.Body className='text-center'>
                {/* <iframe title="spatial" style={{ height: '600px', width: '100%' }} src="https://www.spatial.io/s/habitat-62c8daae0d0b1c00013771cf?share=5608793999292313744" allow="microphone https://spatial.io; camera https://spatial.io"></iframe> */}
              <p>The MetavExpo aims to connect a wide audience, including influential persons, experts, artists, investors, so that they can communicate internationally, creating and at the same time economic and working opportunities: this would allow participants to share their works, ideas, culture and products to an international audience. In this way, exhibitors will contribute not only to the development of their image, but also and above all to the development of their activities at an international level.</p>
              </Card.Body>
              <Card.Footer className={`text-center ${props.dark ? 'dark' : ''}`}>
                <Button href="/metavexpo" className='m-2'>ℹ️ Info</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default Home;