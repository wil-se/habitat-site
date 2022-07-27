import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Logo from "../../Assets/logo.png"
import MainModel from "./MainModel"
import Slider from "../Slider/Slider";


function Home() {
  return (
    <>
      <Container>
          <Row className="pt-5 mb-5">
            <img alt="logo" src={Logo}/>
          </Row>
      </Container>
      
      <Row className="py-5 mx-2" style={{
        backgroundColor: "#FBFBFD",
        }}>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <h2 className="text-center">“I believe wherever dreams dwell, the heart calls it home.<br/> So may you untangle yourself from the twist of melancholy and let your thoughts carry you back to the birthplace of your truth.”</h2>
            <h3 className="text-end">-Dodinsky</h3>
          </Col>
        </Row> 
      </Row>

      <Container style={{
        height: window.innerWidth > 600 ? 800 : 360,
        marginBottom: window.innerWidth > 600 ? 0 : 50
        }}>
       <MainModel/>
      </Container>
      
      <Container style={{maxWidth: "100%",}}>
        <Slider/>
      </Container>
        
        <Container style={{maxWidth: "99%",}}>
      <Card className="my-2 mx-2 py-4">
        <Row className="align-items-center">
          <Col className="text-center align-text-middle my-2 py-2" xs={12} md={6}>
            <img style={{width: window.innerHeight > 600 ? "60%" : "90%",}} alt="opensea" src="https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(dark).svg"/>
          </Col>
          <Col className="text-center my-2 py-2 pt-xs-4" xs={12} md={6}>
          <img style={{width: window.innerHeight > 600 ? "60%" : "90%",}} alt="spatial" src="https://s.yimg.com/uu/api/res/1.2/FhQZR.hFVYnZ8ZlYQDOjWg--~B/aD0xMjk7dz00ODA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/business-wire.com/bfd0e2193be5ac3fa427ac198b25fc84"/>
          </Col>
        </Row>
      </Card>
      </Container>

      <Container style={{maxWidth: "99%",}}>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="px-1">
            <Container className="bullet px-1 py-2" style={{borderRadius: "0.375rem"}}>
              <Row><h2 className="text-center mt-2">Furnish your metaverse</h2></Row>
            </Container>
          </Col>
          <Col xs={12} md={6} className="px-1">
            <Container className="bullet px-1 py-2" style={{borderRadius: "0.375rem"}}>
              <Row><h2 className="text-center mt-2">MetavExpo</h2></Row>
            </Container>
          </Col>
          <Col xs={12} md={6} className="px-1">
            <Container className="bullet px-1 py-2" style={{borderRadius: "0.375rem"}}>
              <Row><h2 className="text-center mt-2">Connect with design experts</h2></Row>
            </Container>
          </Col>
          <Col xs={12} md={6} className="px-1">
            <Container className="bullet px-1 py-2" style={{borderRadius: "0.375rem"}}>
              <Row><h2 className="text-center mt-2">Digital/Phisycal Twin</h2></Row>
            </Container>
          </Col>
          <Col xs={12} md={6} className="px-1">
            <Container className="bullet px-1 py-2" style={{borderRadius: "0.375rem"}}>
              <Row><h2 className="text-center mt-2">Get Rewards</h2></Row>
            </Container>
          </Col>
          <Col xs={12} md={6} className="px-1" style={{borderRadius: "0.375rem"}}>
            <Container className="bullet px-1 py-2">
              <Row><h2 className="text-center mt-2">Charity DAO</h2></Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;