import React from "react";
import styled from "styled-components";
import { UsedataState } from "../DataStatecontext";

const Wrapper = styled.div`
  
`;

const Header = styled.div`
  display:flex;
  justify-content:space-between;
  padding: 0 10px;
`;

const Title = styled.div`
  font-size:28px;
  font-weight:600;
  &::after {
    content: " | 소장품";
    font-size: 16px;
    font-weight: 400;
    color: #7d6d6d;
  }
`;

const More = styled.div`
  font-size: 16px;
  color: #333;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 30px;
  margin-left:45px;
`;

const ItemBox = styled.div`
  width:300px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: auto;
    display: block;
  }

  .text {
    padding: 10px;
    border-top: 1px solid #ccc;
    text-align: left;

    h3 {
      font-size: 16px;
      font-weight: 700;
      margin: 5px 0;
    }

    p {
      font-size: 14px;
      color: #333;
      margin: 2px 0;
    }
  }
`;

function Collection() {
  const data = UsedataState()[2];

  return (
    <Wrapper>
      <Header>
        <Title>Collection</Title>
        <More>더보기</More>
      </Header>
      <Container>
        {data.map((item) => (
          <ItemBox key={item.id}>
            <img src={item.src} alt={item.author} />
            <div className="text">
              <h3>{item.author}</h3>
              <p>{item.ttl3}</p>
              <p>{item.day3}</p>
            </div>
          </ItemBox>
        ))}
      </Container>
    </Wrapper>
  );
}

export default Collection;
