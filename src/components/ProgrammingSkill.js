import { Col, ProgressBar } from "react-bootstrap";
import uuid from "react-uuid";

export default function ProgrammingSkill() {
  const skills = [
    {
      id: "1",
      name: "HTML/CSS",
      level: "90",
    },
    {
      id: "2",
      name: "Bootstrap",
      level: "95",
    },
    {
      id: "3",
      name: "JavaScript",
      level: "85",
    },
    {
      id: "4",
      name: "React JS",
      level: "80",
    },
    {
      id: "5",
      name: "Next JS",
      level: "40",
    },
    {
      id: "6",
      name: "Node JS",
      level: "70",
    },
    {
      id: "7",
      name: "Java",
      level: "65",
    },
    {
      id: "8",
      name: "TypeScript",
      level: "70",
    },
    {
      id: "9",
      name: "Git",
      level: "70",
    },
  ];

  return (
    <section id="skills" className="bg-color">
      <div className="container">
        <div className="row py-5">
          <h2 className="text-center my-2">My Skills</h2>
          {skills.map((skill) => (
            <Col key={uuid()} className="my-2" md={4} data-aos="fade-up">
              <p className="fs-5">{skill.name}</p>
              <ProgressBar
                animated
                variant="primary"
                now={skill.level}
                label={`${skill.level}%`}
              />
            </Col>
          ))}
        </div>
      </div>
    </section>
  );
}
