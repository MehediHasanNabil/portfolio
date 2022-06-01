import { Col, Row } from "react-bootstrap";
import uuid from "react-uuid";

export default function About() {
  const about = [
    {
      id: uuid(),
      title: "Name",
      textContent: "Md. Mehedi Hasan Nabil",
    },
    {
      id: uuid(),
      title: "Email",
      textContent: "mehedihasannabil49@gmail.com",
    },
    {
      id: uuid(),
      title: "Date of birth",
      textContent: "20 December, 1999",
    },
  ];
  return (
    <section id="about" className="container" style={{ height: "50vh" }}>
      <h2 className="text-center">About</h2>
      <h4>Know Me</h4>
      <Row>
        <Col md={6}>
          <h2>Hi, I&apos;m Md. Mehedi Hasan Nabil</h2>
          <p className="fs-4">
            I am a front-end web developer. Create a website's graphical user
            interface using HTML, CSS and JavaScript
          </p>
        </Col>
        <Col md={6}>
          {about.map((aboutMe) => (
            <div key={aboutMe.id} className="fs-5">
              <p>{aboutMe.title}</p>
              <p>{aboutMe.textContent}</p>
            </div>
          ))}
        </Col>
      </Row>
    </section>
  );
}
