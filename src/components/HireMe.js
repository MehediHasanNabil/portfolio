import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/HireMe.module.css";

export default function HireMe() {
  return (
    <>
      <section className={`${styles.bgImage}`}>
        <Container>
          <Row style={{ height: "300px" }}>
            <Col md={12}>
              <div
                className="position-absolute top-50 start-50 text-center text-light"
                style={{ transform: "translate(-50%, -50%)" }}
              >
                <h1>Interested in working with me?</h1>
                <button className="btn btn-primary px-4 mt-3">Hire Me</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
