import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import styles from "../styles/Resume.module.css";
import uuid from "react-uuid";

export default function Resume() {
  const education = [
    {
      id: uuid(),
      program: "M.Sc. in Computer Science",
      year: "2023 - ",
      university: "Southeast University",
    },
    {
      id: uuid(),
      program: "Bachelor in Computer Engineering",
      year: "2019 - 2022",
      university: "Southeast University",
    },
    {
      id: uuid(),
      program: "Higher Secondary Certificate (H.S.C)",
      year: "2019 - 2022",
      university: "Bhuapur Ibrahim Khan College, Tangail",
    },
    {
      id: uuid(),
      program: "Secondary School Certificate (S.S.C)",
      year: "2019 - 2022",
      university: "Dhangora model High School, Sirajganj",
    },
  ];
  return (
    <section className="container py-5 bg-color">
      <h5 className="text-center my-2 fw-bold">Resume</h5>
      <h2 className="text-center fw-bold mb-3">A summary of My Resume</h2>
      <Row data-aos="fade-up">
        <Col md={6}>
          <h2>My Education</h2>
          <div data-i="" className={styles.resume_border}>
            {education.map((item) => (
              <Card key={item.id} className={`border-0 ${styles.arrow_icon}`}>
                <Card.Body>
                  <Card.Title>{item.program}</Card.Title>
                  <Card.Text>{item.university}</Card.Text>
                  <Card.Text>{item.year}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </section>
  );
}
