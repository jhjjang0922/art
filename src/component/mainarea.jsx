import React from "react";
import styles from "./Mainimg.module.css";
import areaStyles from "./mainarea.module.css";
import styled from 'styled-components';

import Display from "./DisplayItem";
import Education from "./EducationItem";
import Collection from "./CollectionItem";
import Ontact from "./OntactItem";


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
      <Education/>
      <Collection/>
      <Ontact/>
    </div>

  );
}

export default Mainarea;
