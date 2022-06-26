import { useContext, useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  Form,
  Modal,
  OverlayTrigger,
  ProgressBar,
  Spinner,
  Tooltip,
} from "react-bootstrap";
import { API_URL } from "../App";
import swal from "sweetalert";
import { LoggedInUser } from "../App";

export default function ProgrammingSkill() {
  const [modelID, setModelID] = useState("");
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const name = useRef("");
  const level = useRef("");
  const authUserInfo = useContext(LoggedInUser);

  useEffect(function () {
    getDataFromDatabase();
  }, []);

  const handleClose = () => setModelID("");
  const handleShow = (id) => {
    setModelID(id);
  };

  function getDataFromDatabase() {
    fetch(`${API_URL}/api/skills/`)
      .then((response) => response.json())
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((err) => {
        swal("Error", err.message, "error");
        console.error(err);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      language_name: name.current.value,
      level: level.current.value,
    };

    fetch(`${API_URL}/api/skills/${modelID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        swal("Good job!", "Information Update Successful.", "success");
        setModelID("");
        getDataFromDatabase();
        console.log("Success:", data);
      })
      .catch((error) => {
        swal("Error", error.message, "error");
        console.error("Error:", error);
      });
  }

  return (
    <section id="skills" className="bg-color">
      <div className="container">
        <div className="row py-5">
          <h2 className="text-center my-2">My Skills</h2>
          {loading ? (
            <Spinner
              className="mx-auto mt-5"
              animation="border"
              variant="primary"
            />
          ) : (
            skills.map((skill) => (
              <Col
                key={skill._id}
                className="position-relative my-3"
                md={4}
                data-aos="fade-up"
              >
                <p className="fs-5">{skill.language_name}</p>
                {authUserInfo?.email === "mehedihasannabil49@gmail.com" && (
                  <Button
                    variant="primary btn-sm position-absolute top-0 end-0 rounded-circle"
                    onClick={() => handleShow(skill._id)}
                  >
                    <i className="bi bi-pencil"></i>
                  </Button>
                )}
                <ProgressBar
                  animated
                  variant="primary"
                  now={skill.level}
                  label={`${skill.level}%`}
                />
                <Modal
                  show={modelID === skill._id}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                      <Modal.Title>Update Skills Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Label>Name: </Form.Label>
                      <Form.Control
                        type="text"
                        ref={name}
                        placeholder="Enter Name"
                        defaultValue={skill.language_name}
                      />
                      <Form.Label>Level: </Form.Label>
                      <Form.Control
                        type="text"
                        ref={level}
                        placeholder="Enter Level"
                        defaultValue={skill.level}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button type="submit" variant="primary">
                        Update
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal>
              </Col>
            ))
          )}
        </div>
        {authUserInfo?.email && (
          <OverlayTrigger overlay={<Tooltip>Add Skills</Tooltip>}>
            <Button
              id="tooltip_button"
              variant="primary btn-sm rounded-circle mx-auto"
            >
              <i className="bi bi-plus-circle fs-4"></i>
            </Button>
          </OverlayTrigger>
        )}
      </div>
    </section>
  );
}
