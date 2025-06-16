import React from "react";
import styled from "styled-components";
import { UsedataState } from "../DataStatecontext";

const DisplayWrapper = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  background-color: #e7d3bb;
`;

const TopArea = styled.div`
  background-color:rgb(106, 50, 41);
  height:170px;
  padding: 20px 40px;
  color: rgba(255, 255, 255, 0.2);
  font-size: 120px;
  font-weight: bold;
  position: relative;
`;

const NavTabs = styled.div`
position:absolute;
right: 40px;
top: 30px;
color: #000;
font-size: 16px;
span{
  margin-left:20px;
  cursor: pointer;
  &:hover{
    text-decoration:underline;
  }
}
`

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
  gap: 60px;
  flex-wrap: wrap;
  
`;

const DisplayCard = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-top: 12px;
    margin-bottom: 4px;
    color: #000;
  }

  p {
    font-size: 14px;
    color: #996f51;
  }
`

function Display() {
  const data = UsedataState()[0];
  return (
    <DisplayWrapper>
      <TopArea>
        Display
        <NavTabs>
          <span>현재전시</span>
          <span>예정전시</span>
          <span>과거전시</span>
        </NavTabs>
      </TopArea>
      <CardContainer>
        {data.map(item => (
          <DisplayCard key={item.id}>
            <img src={item.src} />
            <h3>{item.ttl}</h3>
            <p>{item.day}</p>
          </DisplayCard>
        ))}
      </CardContainer>
    </DisplayWrapper>
  );
}

export default Display;
