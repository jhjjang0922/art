import React from "react";
import styles from "./Mainimg.module.css";
import areaStyles from "./mainarea.module.css";
import styled from "styled-components";
import { HiMiniSpeakerWave } from "react-icons/hi2";

import Display from "./DisplayItem";
import Education from "./EducationItem";
import Collection from "./CollectionItem";
import Ontact from "./OntactItem";
import Footer from "./Footer";

const Main_bottom = styled.div`
  width: 100%;
  height: 80px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: sans-serif;
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  .icon {
    font-size: 24px;
    padding: 0 10px;
  }

  .label {
    font-weight: 600;
    font-size: 16px;
  }

  .date {
    color: #777;
    font-size: 14px;
  }

  .title {
    font-size: 14px;
  }
`;

const More = styled.span`
  font-weight: bold;
  font-size: 14px;
  padding: 0 10px;
  cursor: pointer;
`;



function Mainarea() {
  return (
    <div className={areaStyles.Wrap}>
      <div className={styles.main_img}>
        <div className={styles.main_text}>
          젊은 시각 새로운 시선 2025
        </div>
        <div className={styles.sub_text}>
          2025-04-10 - 2025-07-06
        </div>
      </div>

      <Display />
      <Education />
      <Collection />
      <Ontact />

      <Main_bottom>
        <LeftGroup>
          <HiMiniSpeakerWave className="icon" />
          <span className="label">새소식</span>
          <span className="date">2024-05-08</span>
          <span className="title">[리노베이션] 부산시립미술관 본관 장기 휴관 알림</span>
        </LeftGroup>
        <More>더보기</More>
      </Main_bottom>
      <Footer />
    </div>

  );
}

export default Mainarea;
