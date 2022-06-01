import { Button, Image, Container, Row } from "react-bootstrap";
import styles from "../styles/Header.module.css";
import { Typewriter } from "react-simple-typewriter";
import portfolio from "../assets/nabil.jpg";
import { useEffect } from "react";
import AvatarImage from "./AvatarImage";

export default function Header() {
  useEffect(function () {
    const home = document.getElementById("home");
    window.addEventListener("scroll", function () {
      let offset = window.pageYOffset;
      if (offset < 1200) {
        home.style.backgroundPositionY = `${-offset * 0.5}px`;
      }
    });
  }, []);
  return (
    <section id="home" className={`text-light ${styles.backgroundImage}`}>
      <Container>
        <Row className="position-relative" style={{ minHeight: "100vh" }}>
          <div
            className="position-absolute top-50 start-50 text-center"
            style={{ width: "500px", transform: "translate(-50%, -50%)" }}
          >
            <AvatarImage />
            <br />

            <h2 className="my-2" style={{ fontSize: "2.2rem" }}>
              I am{"  "}
              <Typewriter
                words={["Web Developer.", "UI/UX Designer."]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </h2>
            <h5>I am Md. Mehedi Hasan Nabil</h5>
            <Button variant="primary px-4 my-1 me-4">Hire Me</Button>
            <a
              href="../assets/header-bg.jpg"
              className="btn btn-danger px-4 my-1"
              download
            >
              Download CV
            </a>
          </div>
        </Row>
      </Container>
    </section>
  );
}
