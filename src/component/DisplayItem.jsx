import React from "react";
import styled from "styled-components";
import { UsedataState } from "../DataStatecontext";

const DisplayWrapper = styled.section`
  width: 100%;
  height: 600px; /* 예시 높이 */
  display: flex;
  flex-direction: column;
`;

const TopArea = styled.div`
  background-color: #592d26;
  
`;

function Display() {
  const data = UsedataState()[0];
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <img src={item.src} />
          <h3>{item.ttl}</h3>
          <p>{item.day}</p>
        </div>
      ))}
    </div>
  );
}

export default Display;
