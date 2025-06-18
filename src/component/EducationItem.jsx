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
  font-size:46px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Menu = styled.div`
  font-size:16px;
  margin-bottom:20px;
  display:flex;
  gap:20px;
  span {
    position: relative;
    padding: 0 8px;

    &:not(:last-child)::after {
      content: "|";
      position: absolute;
      right: -10px;
      color: #999;
    }
  }
`;

const CardGrid = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap: wrap;
  gap: 40px;
`;

const ItemBox = styled.div`
  width: 250px;
  text-align: center;
  img{
    width:100%;
    height:auto;
  }
  h3{
    font-size:16px;
    font-weight:bold;
    margin:12px 0px -5px;
  }
  p{
    font-size:14px;
    color:#888;
  }
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
