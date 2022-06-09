import { Button, Container, Row } from "react-bootstrap";
import styles from "../styles/Header.module.css";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";
import AvatarImage from "./AvatarImage";
import SocialMedia from "./SocialMedia";

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
      {/* <MyParticles />  */}
      <Container>
        <Row className="position-relative" style={{ minHeight: "100vh" }}>
          <div
            className="position-absolute top-50 start-50 text-center"
            style={{ width: "500px", transform: "translate(-50%, -50%)" }}
          >
            <AvatarImage />
            <br />
            <h2 className="my-2 fw-bold" style={{ fontSize: "2.2rem" }}>
              I am{"  "}
              <Typewriter
                words={["a Web Developer.", "an UI/UX Designer."]}
                loop={3}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </h2>
            <h5 className="fw-bold">I am Md. Mehedi Hasan Nabil</h5>
            <SocialMedia />
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
