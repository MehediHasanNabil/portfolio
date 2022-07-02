import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import styles from '../styles/Resume.module.css';
import uuid from 'react-uuid';

export default function Resume() {
  const education = [
    {
      id: uuid(),
      program: 'Bachelor in Computer Engineering',
      year: '2019 - 2023',
      university: 'Southeast University',
    },
    {
      id: uuid(),
      program: 'Higher Secondary Certificate (H.S.C)',
      year: '2019 - 2022',
      university: 'Bhuapur Ibrahim Khan College, Tangail',
    },
    {
      id: uuid(),
      program: 'Secondary School Certificate (S.S.C)',
      year: '2019 - 2022',
      university: 'Dhangora model High School, Sirajganj',
    },
  ];
  return (
    <section className="container py-5 bg-color">
      <h5 className="text-center my-2 fw-bold">Resume</h5>
      <h2 className="text-center fw-bold mb-3">A summary of My Resume</h2>
      <div data-aos="fade-up" className={`text-center ${styles.resume_border}`}>
        <h3 className="text-center fw-bold mb-3">My Education</h3>
        {education.map((item, index) => (
          <Row key={item.id} className={`text-center my-5 ${styles.circle}`}>
            <Col md={6} className={`border-0 ${styles.arrow_icon}`}>
              <Card>
                {index % 2 === 0 ? (
                  <Card.Body>
                    <Card.Title>{item.program}</Card.Title>
                    <Card.Text>{item.university}</Card.Text>
                  </Card.Body>
                ) : (
                  <Card.Text>{item.year}</Card.Text>
                )}
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                {index % 2 !== 0 ? (
                  <Card.Body>
                    <Card.Title>{item.program}</Card.Title>
                    <Card.Text>{item.university}</Card.Text>
                  </Card.Body>
                ) : (
                  <Card.Text>{item.year}</Card.Text>
                )}
              </Card>
            </Col>
          </Row>
        ))}
      </div>
    </section>
  );
}
