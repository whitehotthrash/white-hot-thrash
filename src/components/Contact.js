import React from "react";
import styled from "@emotion/styled";

const Section = styled.section`
  background: #f3f1e7;
  border-radius: 18px;
  box-shadow: 0 2px 16px 0 #b4b4b4;
  margin-bottom: 2rem;
  padding: 1.5rem;
  transition: box-shadow 0.3s;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #245edb;
  margin: 0 0 1rem 0;
  font-weight: 700;
  letter-spacing: 1px;
`;

const Contact = () => (
  <Section data-aos="fade-up" data-aos-delay="400">
    <Title>Contact</Title>
    <p style={{ color: "#1c3f94" }}>
      Let's connect! Reach out via{" "}
      <a
        href="https://linkedin.com/in/tim-maastricht-89878216b"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#245edb" }}
      >
        LinkedIn
      </a>{" "}
      or check out my work on{" "}
      <a
        href="https://github.com/whitehotthrash"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#245edb" }}
      >
        GitHub
      </a>
      .
    </p>
  </Section>
);

export default Contact;
