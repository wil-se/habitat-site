import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
      
      <Container className="py-5" style={{
        backgroundColor: "#FBFBFD",
        maxWidth: "100%"
        }}>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <h2 className="text-center">“I believe wherever dreams dwell, the heart calls it home.<br/> So may you untangle yourself from the twist of melancholy and let your thoughts carry you back to the birthplace of your truth.”</h2>
            <h3 className="text-end">-Dodinsky</h3>
          </Col>
        </Row> 
      </Container>


      <Container style={{
        height: window.innerWidth > 600 ? 800 : 360,
        marginBottom: window.innerWidth > 600 ? 0 : 50
        }}>
       <MainModel/>
      </Container>
      
      <Container style={{
        maxWidth: "100%",
      }}>
        <Slider/>
      </Container>
    </>
  );
}

export default Home;
