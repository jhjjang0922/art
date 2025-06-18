import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";

import { Provider } from "./DataStatecontext";

import Mainarea from "./component/mainarea";
import View from "./component/view";
import Display from "./component/display";
import Education from "./component/education";
import Collection from "./component/collection";
import Ontact from "./component/ontact";

import Logoimg from "./images/logo.png";

function App() {
  return (
    <Provider>
      <div className='wrap'>
        <header className='header'>
          <div>
            <h1 className='logo'><Link to="/"><img src={Logoimg} /></Link></h1>
            <nav className='nav'>
              <ul>
                <li><Link to="/component/view" className="black-link">관람</Link></li>
                <li><Link to="/component/display" className="black-link">전시</Link></li>
                <li><Link to="/component/education" className="black-link">교육/행사</Link></li>
                <li><Link to="/component/collection" className="black-link">수집/연구/출판</Link></li>
                <li><Link to="/component/ontact" className="black-link">온택트</Link></li>
              </ul>
            </nav>
            <ul className='q_mn'>
              <span className="lang">KR | EN</span>
              <IoSearch className="icon" />
              <span className="auth"><Link to="#" className="black-link">회원가입</Link> |
                <Link to="#" className="black-link">로그인</Link></span>
            </ul>
          </div>
        </header>

        <div>
          <Route path="/" exact={true} component={Mainarea} />
          <Route path="/component/view" component={View} />
          <Route path="/component/display" component={Display} />
          <Route path="/component/education" component={Education} />
          <Route path="/component/collection" component={Collection} />
          <Route path="/component/ontact" component={Ontact} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
