import { Button, Card, Col, Row } from "react-bootstrap";
import uuid from "react-uuid";
import styles from "../styles/Project.module.css";
import moviePic from "../assets/undraw_horror_movie_3988.svg";
import chatPic from "../assets/undraw_chatting_re_j55r.svg";
import ECommercePic from "../assets/undraw_web_shopping_re_owap.svg";

export default function Project({ project, limit }) {
  let projectArray = [
    {
      id: 1,
      name: "Online Movies Ticket Booking",
      backgroundPic: moviePic,
      liveUrl: "https://movie-ticket-booking-nodejs.herokuapp.com/",
    },
    {
      id: 2,
      name: "React Chat Application",
      backgroundPic: chatPic,
      liveUrl: "https://movie-ticket-booking-nodejs.herokuapp.com/",
    },
    {
      id: 3,
      name: "E-Commerce App",
      backgroundPic: ECommercePic,
      liveUrl: "https://movie-ticket-booking-nodejs.herokuapp.com/",
    },
    {
      id: 4,
      name: "Resume Builder Web Application",
      backgroundPic: ECommercePic,
      liveUrl: "https://movie-ticket-booking-nodejs.herokuapp.com/",
    },
    {
      id: 5,
      name: "Online Code Editor (React)",
      backgroundPic: ECommercePic,
      liveUrl: "https://movie-ticket-booking-nodejs.herokuapp.com/",
    },
  ];

  return (
    <section className="container py-5 bg-color">
      <h5 className="text-center my-2 fw-bold">My Project</h5>
      <h2 className="text-center fw-bold mb-3">How I can help your next project</h2>

      <Row>
        {projectArray.map((project) => (
          <Col md={4} key={uuid()} data-aos="fade-up">
            <Card className={`mx-auto my-3 p-2 border-0 ${styles.project_card}`}>
              <Card.Img
                variant="top"
                className="h-50"
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
                <Card.Title>{project.name}</Card.Title>
                <Card.Text></Card.Text>
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
          </Col>
        ))}
      </Row>
    </section>
  );
}
