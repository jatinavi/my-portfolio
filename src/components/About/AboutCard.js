import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jatin Kumar Balchandani </span>
            from <span className="purple"> Ajmer, India.</span>
            <br />
            I am currently pursuing BTech in CSE with specialization in AIML at UPES, Dehradun.
            <br />
            I am passionate about AI, Cloud Computing, and building innovative solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Horse Riding
            </li>
            <li className="about-activity">
              <ImPointRight /> Organizing Events
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jatin Kumar Balchandani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
