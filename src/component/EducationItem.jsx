import React from "react";
import styled from "styled-components";
import { UsedataState } from "../DataStatecontext";

const EducationWrapper = styled.section`
  width: 100%;
  padding: 60px 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  
`;

const Menu = styled.div`
  
`;

const CardGrid = styled.div`
  
`;

const ItemBox = styled.div`
  
`;

function Education() {
  const data = UsedataState()[1]; // 두 번째 배열 (교육 항목)

  return (
    <EducationWrapper>
      <Title>Eeducation/Event</Title>
      <Menu>
        <span>프로그램</span>
        <span>문화행사</span>
        <span>교육 및 행사사진</span>
        <span>자료실</span>
      </Menu>

      <CardGrid>
        {data.map(item => (
          <ItemBox key={item.id}>
            <img src={item.src} alt={item.ttl2} />
            <h3 dangerouslySetInnerHTML={{ __html: item.ttl2 }} />
            <p>{item.day2}</p>
          </ItemBox>
        ))}
      </CardGrid>
    </EducationWrapper>
  );
}

export default Education;
