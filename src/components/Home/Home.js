import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Logo from "../../Assets/logo-purple.png"
import MainModel from "./MainModel"
import Slider from "../Slider/Slider";


function Home() {
  return (
    <>
      <Container>
          <Row className="pt-5 my-5">
            <img alt="logo" src={Logo}/>
          </Row>
      </Container>
      
      <Row className="py-2 mx-0 headline-row justify-content-center">
          <Col xs={12} md={8}>
            <h1 className="text-center headline"><b>If you do not understand the yeld, you are the yield.</b></h1>
          </Col> 
      </Row>

      <Row className="py-5 mx-0 mt-5 mb-3 justify-content-center">
          <Col xs={12} md={8}>
            <h1 className="text-center"><b>Collection's name</b></h1>
            <h3 className="text-center">Collection's subheading one two three</h3>
          </Col> 
      </Row>

      <Container style={{
        height: window.innerWidth > 600 ? 800 : 360,
        marginBottom: window.innerWidth > 600 ? 0 : 50
        }}>
       <MainModel/>
      </Container>
      
      <Container className="px-0" style={{maxWidth: "100%",}}>
        <Slider/>
      </Container>
        
      <Container className="mb-5">
        <Card className="my-2 mx-2 py-4 card-hover">
          <Row className="align-items-center">
            <Col className="text-center align-text-middle my-4 py-2 divider-mobile" xs={12} md={6}>
              <Col>
                <img style={{width: window.innerWidth > 600 ? "60%" : "90%",}} alt="opensea" src="https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(dark).svg"/>
              </Col>
              <Col>
                <Button className="mt-4 px-5" href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/41443084155094309080334505268256976626172870270072908977990979081381502517249" target="_blank"><b>Take a look</b></Button>
              </Col>
            </Col>
            {
              window.innerWidth < 600 ? <><hr style={{width: "80%", margin: "auto"}}></hr>
              </>:<></>
            }
            <Col className="text-center my-4 py-2 pt-xs-4" xs={12} md={6}>
            <Col>
              <img style={{width: window.innerWidth > 600 ? "60%" : "90%",}} alt="spatial" src="https://s.yimg.com/uu/api/res/1.2/FhQZR.hFVYnZ8ZlYQDOjWg--~B/aD0xMjk7dz00ODA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/business-wire.com/bfd0e2193be5ac3fa427ac198b25fc84"/>
            </Col>
            <Col>
            </Col>
              <Button className="mt-4 px-5" href="https://spatial.io/s/habitat-62c8daae0d0b1c00013771cf" target="_blank"><b>Take a look</b></Button>
            </Col>
          </Row>
        </Card>
      </Container>

      <Container className="mb-5">
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="px-3 py-2">
            <Card className="bullet card-hover">
            <Card.Header className="text-center"><h4>Furnish your metaverse</h4></Card.Header>
            <Card.Body className="text-center">
              Magic text sauce
              <br/>
              <img alt="nyan" src="https://c.tenor.com/-AyTtMgs2mMAAAAi/nyan-cat-nyan.gif"/>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} className="px-3 py-2">
            <Card className="bullet card-hover">
            <Card.Header className="text-center"><h4>MetavExpo</h4></Card.Header>
            <Card.Body className="text-center">
              Magic text sauce
              <br/>
              <img alt="nyan" src="https://c.tenor.com/-AyTtMgs2mMAAAAi/nyan-cat-nyan.gif"/>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} className="px-3 py-2">
            <Card className="bullet card-hover">
            <Card.Header className="text-center"><h4>Connect with design experts</h4></Card.Header>
            <Card.Body className="text-center">
              Magic text sauce
              <br/>
              <img alt="nyan" src="https://c.tenor.com/-AyTtMgs2mMAAAAi/nyan-cat-nyan.gif"/>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} className="px-3 py-2">
            <Card className="bullet card-hover">
            <Card.Header className="text-center"><h4>Digital/Phisycal Twin</h4></Card.Header>
            <Card.Body className="text-center">
              Magic text sauce
              <br/>
              <img alt="nyan" src="https://c.tenor.com/-AyTtMgs2mMAAAAi/nyan-cat-nyan.gif"/>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} className="px-3 py-2">
            <Card className="bullet card-hover">
            <Card.Header className="text-center"><h4>Get Rewards</h4></Card.Header>
            <Card.Body className="text-center">
              Magic text sauce
              <br/>
              <img alt="nyan" src="https://c.tenor.com/-AyTtMgs2mMAAAAi/nyan-cat-nyan.gif"/>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} className="px-3 py-2">
            <Card className="bullet card-hover">
            <Card.Header className="text-center"><h4>Charity DAO</h4></Card.Header>
            <Card.Body className="text-center">
              Magic text sauce
              <br/>
              <img alt="nyan" src="https://c.tenor.com/-AyTtMgs2mMAAAAi/nyan-cat-nyan.gif"/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="text-center mb-5">
        <Button className="px-5 golden-button" href="/whitepaper">
          <h3>Read the whitepaper</h3>
        </Button>
      </Container>
    </>
  );
}

export default Home;