import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/template.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function Whitepaper() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section pt-4">
        <Row>
          <Col xs={12} md={6} className="text-center mb-4">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
              className='mb-4'
            >
              <AiOutlineDownload />
              &nbsp;Download Whitepaper
            </Button>

            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1 : 0.6} />
            </Document>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
              className='mb-4'
            >
              <AiOutlineDownload />
              &nbsp;Download Litepaper
            </Button>

            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1 : 0.6} />
            </Document>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Whitepaper;
