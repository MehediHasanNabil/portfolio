import {
  Col,
  Container,
  Nav,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link className="text-light" href="#home">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-light" href="#about">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-light" href="#skills">
                  Skills
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Nav className="justify-content-center">
              <Nav.Link href="#">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Twitter</Tooltip>}
                >
                  <span className="d-inline-block">
                    <i className="text-light bi bi-twitter"></i>
                  </span>
                </OverlayTrigger>
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://web.facebook.com/nabil.mehedi1234"
              >
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Facebook</Tooltip>}
                >
                  <span className="d-inline-block">
                    <i className="text-light bi bi-facebook"></i>
                  </span>
                </OverlayTrigger>
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://github.com/MehediHasanNabil"
              >
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Github</Tooltip>}
                >
                  <span className="d-inline-block">
                    <i className="text-light bi bi-github"></i>
                  </span>
                </OverlayTrigger>
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12} className="text-center">
            <p className="copyright">
              Copyright © {new Date().getFullYear()} All rights reserved | This
              protfolio is made with{" "}
              <i className="ion-ios-heart" aria-hidden="true"></i> by Md. Mehedi
              Hasan Nabil
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
