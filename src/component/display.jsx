import React from "react";
import styled from "styled-components";
import { UsedataState } from "../DataStatecontext";
import DisplayTopBar from "./DisplayTopBar";

const Container = styled.div`
  padding: 40px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  margin-bottom: 60px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  display: block;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Text = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }

  h3 {
    margin: 10px 0 5px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  p {
    margin: 0;
    color: #666;
    font-size: 0.95rem;
  }
`;

function Display() {
  const data = UsedataState()[0];

  return (
    <div>
      <DisplayTopBar />
      <Container>
        <h2 style={{ fontSize: "24px", marginBottom: "30px" }}>현재전시</h2>
        {data.map((item, index) => (
          <Row key={item.id} reverse={index % 2 === 1}>
            <Image src={item.src} alt={item.ttl} />
            <Text>
              <h3>{item.ttl}</h3>
              <p>{item.day}</p>
            </Text>
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default Display;
