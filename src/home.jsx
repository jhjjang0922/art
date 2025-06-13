import React from "react";
import styles from "./home.module.css"
import styled from 'styled-components';

const Mainimg = styled.div`
   width: 100%;
   height: 500px;
   background-color: #bbe175;

`; 

const Sub_com1 = styled.div`
   width: 100%;
   height: 500px;
   background-color: #59a9e2;
   
   h1{font-size:20px; color:#bf26ab}
`; 
const Sub_com2 = styled.div`
   width: 100%;
   height: 500px;
   background-color: #e175df;
   ul{
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-around;
   }
   ul > li { 
    width:30%;
    height: 300px;
    background-color: #5c0d5a;
    }
`; 
const Sub_com3 = styled.div`
   width: 100%;
   height: 500px;
   background-color: #8275e1;
`; 

const Sub_com4 = styled.div`
   width: 100%;
   height: 500px;
   background-color: #bbe175;
   transition: all 0.5s;
   &:hover{
    background-color: #4e691e;
   }
`; 

function Home() {
 return(
  <div className={styles.Wrap}>
    <Mainimg>mainimg</Mainimg>
    <Sub_com1>
      <h1>Sub_com1</h1>
    </Sub_com1>
    <Sub_com2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Sub_com2>
    <Sub_com3></Sub_com3>
    <Sub_com4></Sub_com4>
  </div>
 )

}

export default Home;