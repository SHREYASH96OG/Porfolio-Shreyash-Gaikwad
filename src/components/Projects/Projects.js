import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import scv from "../../Assets/Projects/scv.png";
import inup from "../../Assets/Projects/inup.png";
import towc from "../../Assets/Projects/towc.png";
import gc from "../../Assets/Projects/gc.png";
import rqm from "../../Assets/Projects/rqm.png";
import frbsas from "../../Assets/Projects/frbsas.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gc}
              isBlog={false}
              title="GitHub Card"
              description="  Enter Username & get Your Card."
              ghLink="https://github.com/SHREYASH96OG/Assignment2MTechZilla"
              demoLink="https://idcardgithubbyshreyash.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frbsas}
              isBlog={false}
              title="Face Recognition Based Smart Attendence System"
              description="The aim is to automate and make a system that is useful to the organization such as an institute. The efficient and accurate method of attendance in the office environment that can replace the old manual methods. This method is secure enough, reliable and available for use. No need for specialized hardware for installing the system in the office.It can be constructed using a camera and computer."
              ghLink="https://github.com/SHREYASH96OG/Face-Recognition-Based-Smart-Attendence-System"
              demoLink="https://github.com/SHREYASH96OG/Face-Recognition-Based-Smart-Attendence-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={towc}
              isBlog={false}
              title="Tesla Official Website Clone"
              description="Tesla Official Website Clone using ReactJS"
              ghLink="https://github.com/SHREYASH96OG/Tesla-Clone"
              demoLink="https://tesla-clone-by-shreyashgaikwad.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scv}
              isBlog={false}
              title="Smart CV"
              description="First Reactjs Porfolio webapp."
              ghLink="https://github.com/SHREYASH96OG/SmartCV-ReactJs-Project"
              demoLink="https://shreyash-gaikwad-portfolio.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rqm}
              isBlog={false}
              title="Random Quotes Machine"
              description=""
              ghLink="https://github.com/SHREYASH96OG/Random-Quotes-Machine?tab=readme-ov-file"
              demoLink="https://shreyash96og.github.io/Random-Quotes-Machine/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inup}
              isBlog={false}
              title="Signup-Signin Page"
              description=""
              ghLink="https://github.com/SHREYASH96OG/Signup-signin.github.io"
              demoLink="https://github.com/SHREYASH96OG/Signup-signin.github.io"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
