import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import Logoimg from "./images/logo.png";

function App() {
  return (
    <div className='wrap'>
      <header className='header'>
        <div>
          <h1 className='logo'><Link to="/"><img src={Logoimg} /></Link></h1>
          <nav className='nav'>
            <ul>
              <li>관람</li>
              <li>전시</li>
              <li>교육/행사</li>
              <li>수집/연구/출판</li>
              <li>온택트</li>
            </ul>
          </nav>
          <ul className='q_mn'>
            <span className="lang">KR | EN</span>
            <IoSearch className="icon" />
            <span className="auth"><Link to="#">회원가입</Link> | <Link to="#">로그인</Link></span>
          </ul>
        </div>
      </header>
      <div id="main_img"></div>
      <div>
        <Route/>
      </div>
    </div>
  );
}

export default App;
