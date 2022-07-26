import React from "react";
import { Container, Row } from "react-bootstrap";
import Logo from "../../Assets/logo.png"
import MainModel from "./MainModel"
import Slider from "../Slider/Slider";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content pt-5">
          <Row style={{marginBottom: 100}}>
            <img alt="logo" src={Logo}/>
          </Row>
          <Row style={{marginBottom: 30}}>
            <h1 className="text-center">“I believe wherever dreams dwell, the heart calls it home. So may you untangle yourself from the twist of melancholy and let your thoughts carry you back to the birthplace of your truth.”</h1>
            <h2 className="text-end">-Dodinsky</h2>
          </Row>
        </Container>
      </Container>
      <Container style={{height: window.innerWidth > 600 ? 800 : 360}}>
       <MainModel/>
      </Container>
      
      <Container>
        <Slider/>
      </Container>
    </section>
  );
}

export default Home;
