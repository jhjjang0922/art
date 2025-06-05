import React from "react";
import styled from "styled-components";

// 스타일 정의
const MainImg = styled.div`
  position: relative;
  width: 100%;
  height: 840px;
  background: url("/public/images/mainimg.jpg") no-repeat center center;
  background-size: cover;
`;

const MainText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 48px;
  font-weight: bold;
`;

function Mainarea() {
  return (
    <MainImg>
      <MainText>
        젊은 시각 새로운 시선 2025
        <br />
      </MainText>
    </MainImg>
  );
}

export default Mainarea;
