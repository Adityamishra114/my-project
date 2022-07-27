import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 0rem;
  //   justify-content: space-between;
  // display: flex;
  // position: relative;
  img {
    position: absolute;
    opacity: 0.6;
    width: 100%;
    height: 60%;
  }
  h1 {
    position: relative;
    color: #000;
    // top: 50%;
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
    grid-template-columns: 1fr;
  }
`;
const Btn = styled.button`
  background-color: blue;
  color: white;
  position: relative;
  font-size: 20px;
  padding: 10px 45px;
  border-radius: 5px;
  margin: 10px 5px;
  line-height: 1.5;
  cursor: pointer;
  //   animation: 5s ease-out 4s 1 slideInFromLeft;

  &:hover {
    background-color: transparent;
    color: black;
    font-family: "Montserrat", sans-serif;
  }
`;

const InfoSectionSeven = () => {
  return (
    <Section>
      <img src={require("../images/synLabs.jpg")} alt="cover" />
      <div
        style={{
          justifyContent: "space-around",
          display: "flex",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <h1>Ready to complete your team?</h1>
        <Btn>Get a Quote</Btn>
      </div>
    </Section>
  );
};

export default InfoSectionSeven;
