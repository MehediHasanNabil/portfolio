import { Form, Button, Row, Col } from "react-bootstrap";

export default function Contact() {
  return (
    <section className="container py-5 bg-color" id="contact">
      <Row data-aos="fade-up">
        <h5 className="text-center my-2 fw-bold">Contact</h5>
        <h2 className="text-center fw-bold mb-3">Let's get in touch</h2>
        <Col lg={7} className="p-4 order-md-1">
          <Form>
            <div className="d-flex gap-3">
              <Form.Group className="mb-3 w-100">
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group className="mb-3 w-100">
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>
            </div>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
        <Col lg={5} className="p-3 order-md-0">
          <h2>Contact Info</h2>
        </Col>
      </Row>
    </section>
  );
}
