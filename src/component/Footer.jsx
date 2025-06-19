import React from "react";
import styled from "styled-components";
import footerLogo from "../images/footerlogo.png";

const FooterContainer = styled.footer`
  background-color: #1e1e1e;
  color: #ccc;
  padding: 40px 0;
  font-size: 14px;
  font-family: sans-serif;
`;

const FooterContent = styled.div`
  width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & h4 {
    color: #fff;
    font-size: 15px;
    margin-bottom: 10px;
  }

  & span {
    cursor: pointer;
  }
`;

const FooterLogo = styled.img`
  width: 100px;
  margin-bottom: 10px;
`;

const FooterBottom = styled.div`
  width: 1120px;
  margin: 20px auto 0;
  font-size: 13px;
  color: #888;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <FooterLogo src={footerLogo} alt="BMA Logo" />
        </div>

        <FooterColumn>
          <h4>소개</h4>
          <span>비전과 전략</span>
          <span>연혁</span>
          <span>일반현황</span>
          <span>MI</span>
          <span>층별안내</span>
          <span>편의시설</span>
          <span>직원안내</span>
        </FooterColumn>

        <FooterColumn>
          <h4>참여</h4>
          <span>새소식</span>
          <span>고시공고</span>
          <span>보도자료</span>
          <span>미술관에게 바라다</span>
          <span>SNS</span>
          <span>행사 전시 안내 신청</span>
        </FooterColumn>

        <FooterColumn>
          <h4>기증/대여/대관</h4>
          <span>기증</span>
          <span>명예의 전당</span>
          <span>대여</span>
          <span>대관</span>
          <h4>저작권/촬영</h4>
          <span>저작권안내</span>
          <span>촬영안내</span>
        </FooterColumn>

        <FooterColumn>
          <h4>후원회/멤버십</h4>
          <span>후원회</span>
          <h4>운영방침</h4>
        </FooterColumn>

        <FooterColumn>
          <h4>주소</h4>
          <span>부산광역시 해운대구 APEC로 58</span>
          <h4>전화번호</h4>
          <span>대표 0507-1404-2602</span>
          <span>이우환공간 051-740-2600</span>
        </FooterColumn>
      </FooterContent>

      <FooterBottom>
        홈페이지의 모든 내용들은 부산시립미술관 허락없이 무단 복제가 불가합니다.
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
