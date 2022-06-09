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
    <section
      id="about"
      className="container py-5 bg-color">
      <h5 className="text-center fw-bold my-2">About</h5>
      <h2 className="text-center fw-bold mb-3">Know Me</h2>
      <Row className="mt-5" data-aos="fade-up">
        <Col md={6}>
          <h2>Hi, I&apos;m Md. Mehedi Hasan Nabil</h2>
          <p className="fs-5">
            I am studying computer science as a graduate from southeast
            University and I finished SSC and HSC from Tangail. I am interested
            in web technologies. I am a front-end web developer. Create a
            website's graphical user interface using HTML, CSS and JavaScript.
            In my spare/free time, I like to hangout with my friends.
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
