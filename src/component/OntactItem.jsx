import React from "react";
import styled from "styled-components";
import { UsedataState } from "../DataStatecontext";

const ItemBox = styled.div`
  flex: 1 1 calc(25% - 20px);
`;

const PlayButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  margin-top: 10px;
  cursor: pointer;
`;
function Ontact() {
  const data = UsedataState()[3];
  return (
    <div>
      {data.map((item) => (
        <ItemBox>
          <img src={item.src} />
          <p>{item.ttl4}</p>
          <PlayButton>▶</PlayButton>
        </ItemBox>
      ))}
    </div>
  );
}

export default Ontact;
