import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shreyash Gaikwad </span>
            from <span className="purple"> Pune,Maharashtra, India.</span>
            <br />
            I am currently Searching decent Job Which can fulfill my dreams.
            <br />
            I have completed Bacholers in Computer Engineering at S B Patil College Of Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Experience is the name everyone gives to their mistakes!"{" "}
          </p>
          <footer className="blockquote-footer">Shreyas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
