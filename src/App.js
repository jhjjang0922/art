import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";

import Mainarea from "./component/mainarea";
import View from "./component/view";
import Display from "./component/display";
import Education from "./component/education";
import Collection from "./component/collection";
import Ontact from "./component/ontact";

import Logoimg from "./images/logo.png";

function App() {
  return (
    <div className='wrap'>
      <header className='header'>
        <div>
          <h1 className='logo'><Link to="/component/mainarea"><img src={Logoimg} /></Link></h1>
          <nav className='nav'>
            <ul>
              <li><Link to="/component/view">관람</Link></li>
              <li><Link to="/component/display">전시</Link></li>
              <li><Link to="/component/education">교육/행사</Link></li>
              <li><Link to="/component/collection">수집/연구/출판</Link></li>
              <li><Link to="/component/ontact">온택트</Link></li>
            </ul>
          </nav>
          <ul className='q_mn'>
            <span className="lang">KR | EN</span>
            <IoSearch className="icon" />
            <span className="auth"><Link to="#">회원가입</Link> | <Link to="#">로그인</Link></span>
          </ul>
        </div>
      </header>

      <div>
        <Route path="/component/mainarea" exact={true} component={Mainarea} />
        <Route path="/component/view" component={View} />
        <Route path="/component/display" component={Display} />
        <Route path="/component/education" component={Education} />
        <Route path="/component/collection" component={Collection} />
        <Route path="/component/ontact" component={Ontact} />
      </div>
    </div>
  );
}

export default App;
