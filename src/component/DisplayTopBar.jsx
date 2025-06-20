import React from "react";
import styled from "styled-components";
import { FaHome, FaAngleRight } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const TopBar = styled.div`
  width: 100%;
  height: 70px;
  background-image: url("../images/display/display_top.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
  color: white;
  font-family: sans-serif;
`;


const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;

  .icon {
    margin: 0 8px;
  }

  .dropdown {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      margin-left: 5px;
    }
  }
`;

function DisplayTopBar() {
  return (
    <TopBar>
      <Breadcrumb>
        <FaHome />
        <FaAngleRight className="icon" />
        <span className="dropdown">
          전시 <IoMdArrowDropdown />
        </span>
        <FaAngleRight className="icon" />
        <span className="dropdown">
          현재전시 <IoMdArrowDropdown />
        </span>
      </Breadcrumb>
    </TopBar>
  );
}

export default DisplayTopBar;
