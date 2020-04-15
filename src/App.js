import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import {UserPage} from './pages/Users';
import {GroupPage} from './pages/Groups';
import {UserDetailPage} from './pages/UserDetailPage';

const Base = () => {
  return (
    <div className="center">
      <h3>Django + React</h3>
      <h4>Hello to Web Application</h4>
    </div>
  );
}

const Header = (props) => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/groups">Groups</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

const App = () => {
  return (
    <div className="container">
      <Header/>
      <Route render={() => <Base/>} path="/" exact />
      <Route render={() => <UserPage/>} path="/users" exact/>
      <Route render={() => <GroupPage/>} path="/groups"/>
      <Route render={() => <UserDetailPage/>} path="/users/detail" />
    </div>
  )
}


export default App;
