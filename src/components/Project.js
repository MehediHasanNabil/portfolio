import { Button, Card, Col, Row } from "react-bootstrap";
import uuid from "react-uuid";
import styles from "../styles/Project.module.css";
import moviePic from "../assets/movie-ticket-booking.png";
import codeEditor from "../assets/online-code-editor.png";
import portfolioPic from "../assets/portfolio.png";
import chatPic from "../assets/undraw_chatting_re_j55r.svg";
import eCommercePic from "../assets/undraw_web_shopping_re_owap.svg";
import onlineCoursePic from "../assets/course_app_using_react.png";
import React from "react";

function Project({ project, limit }) {
  console.log("Project");
  let projectArray = [
    {
      id: uuid(),
      name: "Online Movies Ticket Booking",
      backgroundPic: moviePic,
      liveUrl: "https://movie-ticket-booking-nodejs.herokuapp.com/",
    },
    {
      id: uuid(),
      name: "Online Code Editor (React)",
      backgroundPic: codeEditor,
      liveUrl: "https://online-code-editor-demo.netlify.app",
    },
    {
      id: uuid(),
      name: "Portfolio",
      backgroundPic: portfolioPic,
      liveUrl: "https://mehedi-nabil.netlify.app/",
    },
    {
      id: uuid(),
      name: "React Chat Application",
      backgroundPic: chatPic,
      liveUrl: "https://movie-ticket-booking-nodejs.herokuapp.com/",
    },
    {
      id: uuid(),
      name: "E-Commerce App",
      backgroundPic: eCommercePic,
      liveUrl: "https://movie-ticket-booking-nodejs.herokuapp.com/",
    },
    {
      id: uuid(),
      name: "Online Course App React",
      backgroundPic: onlineCoursePic,
      liveUrl: "https://course-app-react.netlify.app/",
    },
  ];

  return (
    <section className="container py-5 bg-color">
      <h5 className="text-center my-2 fw-bold">My Project</h5>
      <h2 className="text-center fw-bold mb-3">
        How I can help your next project
      </h2>

      <Row>
        {projectArray.map((project) => (
          <Col md={4} key={project.id} data-aos="fade-up">
            <>
              <Card className={`mx-auto my-3 border-0 ${styles.project_card}`}>
                <Card.Img
                  variant="top"
                  height="200px"
                  src={project.backgroundPic}
                />
                <Card.Body>
                  <div>
                    <span className="badge bg-light text-dark rounded-pill">
                      EJS
                    </span>
                    <span className="badge bg-light text-dark rounded-pill mx-1">
                      Node JS
                    </span>
                    <span className="badge bg-light text-dark rounded-pill">
                      Mongodb
                    </span>
                  </div>
                  <Card.Title className="my-3">{project.name}</Card.Title>
                  {/* <Card.Text></Card.Text> */}
                  <Button variant="primary">
                    See More <i className="bi bi-github ms-2"></i>
                  </Button>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ms-2 btn btn-danger"
                  >
                    Live demo <i className="ms-2 bi bi-arrow-return-right"></i>
                  </a>
                </Card.Body>
              </Card>
            </>
          </Col>
        ))}
      </Row>
    </section>
  );
}
export default React.memo(Project);
