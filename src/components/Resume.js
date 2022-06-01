import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
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
    <div className="bg-light">
      <Container>
        <Row className="py-5">
          <Col md={6}>
            <h2>My Education</h2>
            <div className={styles.resume_border}>
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
          <Col md={6}>
            <h2>My Experience</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
