import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aiTicketing from "../../Assets/Projects/Aiticketing.png";
import lungCancerDetection from "../../Assets/Projects/LungCancerDetection.png";
import youtubeCommentAnalysis from "../../Assets/Projects/YoutubeCommentAnalysis.png";
import emotion from "../../Assets/Projects/emotion.png";
import leaf from "../../Assets/Projects/leaf.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiTicketing}
              isBlog={false}
              title="AI-Based Ticketing System"
              description="Developed an AI-driven customer support ticket classification and response system using NLP and ML."
              ghLink="https://github.com/jatin/ai-ticketing-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lungCancerDetection}
              isBlog={false}
              title="Lung Cancer Detection"
              description="CNN-based lung cancer detection model from CT scan images."
              ghLink="https://github.com/jatin/lung-cancer-detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtubeCommentAnalysis}
              isBlog={false}
              title="YouTube Comment Analysis"
              description="Performed sentiment analysis on YouTube comments using NLP."
              ghLink="https://github.com/jatin/youtube-comment-analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Facial Emotion Recognition"
              description="Built a facial emotion recognition system using deep learning."
              ghLink="https://github.com/jatin/facial-emotion-recognition"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Leaf Disease Detection"
              description="CNN-based model for classifying plant leaf diseases."
              ghLink="https://github.com/jatin/leaf-disease-detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Suicide Detection from Text"
              description="Developed a system to detect suicidal intent from user text using NLP."
              ghLink="https://github.com/jatin/suicide-detection"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
