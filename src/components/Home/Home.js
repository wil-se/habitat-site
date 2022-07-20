import React from "react";
import { Container, Row } from "react-bootstrap";
import Logo from "../../Assets/logo.png"

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
      <Container className="home-content pt-5">
          <Row>
          <img alt="logo" src={Logo}/>
          </Row>

          <Row>
          <h1>PER IL RESTO VEDIAMO INSIEME COSA METTERE</h1>
          <br></br>
          <h1>Mangio pasta con tonno</h1>
          <h2>Con tonno</h2>
          <h3>Con tonno</h3>
          <h4>Con tonno</h4>
          <br></br><br></br><br></br><br></br>
          <p>Qual è il vegetale più lento di tutti?</p>
          <br></br>
          <p>La lenticchia!</p>
          <h1>E quello più veloce?</h1>
          <img alt="ao" src="https://img.ilgcdn.com/sites/default/files/styles/xl/public/foto/2014/06/16/1402923046-michale.jpg?_=1402923046&format=webp"></img>
          </Row>
          
        </Container>
      </Container>
    </section>
  );
}

export default Home;
