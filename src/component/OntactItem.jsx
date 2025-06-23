import React from "react";
import styled from "styled-components";
import { UsedataState } from "../DataStatecontext";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 0 20px;
`;


const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 10px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
`;

const More = styled.span`
  font-size: 16px;
  color: #333;
  cursor: pointer;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 60px;
`;

const ItemBox = styled.div`
  display: flex;
  align-items: center;

  .thumbnail-wrapper {
    position: relative;
    display: inline-block;
  }

  img {
    width: 70%;
    height: auto;
    object-fit: cover;
    display: block;
  }

  p {
    max-width: 160px;
    font-size: 17px;
    margin-left:-150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

function Ontact() {
  const data = UsedataState()[3];

  return (
    <Wrapper>
      <Header>
        <Title>온택트 BMA</Title>
        <More>더보기</More>
      </Header>

      <Grid>
        {data.map((item, idx) => (
          <ItemBox key={idx}>
            <div className="thumbnail-wrapper">
              <img src={item.src} alt={item.ttl4} />
            </div>
            <p>{item.ttl4}</p>
          </ItemBox>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default Ontact;
