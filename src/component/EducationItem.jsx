import React from "react";
import styled from "styled-components";
import { UsedataState } from "../DataStatecontext";

const ItemBox = styled.div`
  flex: 1 1 calc(25% - 20px);
`;

function Education() {
  const data = UsedataState()[1]; // 두 번째 배열 (교육 항목)

  return (
    <div>
      {data.map(item => (
        <ItemBox key={item.id}>
          <img src={item.src}/>
          <h3 dangerouslySetInnerHTML={{ __html: item.ttl2 }} />
          <p>{item.day2}</p>
        </ItemBox>
      ))}
    </div>
  );
}

export default Education;
