import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/login';
import Main from './pages/Login/main';

class App extends React.Component {

  render() {
    return (
      <div >
        <HashRouter>
          <Switch>
            <Route path="/" component={Login} exact></Route>
            {/* <Route path="/main" component={Main} exact></Route>
            <Route path="/main/page1" component={Page1} exact></Route>
                <Route path="/main/page2" component={Page2} exact></Route> */}
            <Main />
          </Switch>
        </HashRouter>
      </div>
    );
  }

}

export default App;
