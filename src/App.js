import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './test.less';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Main from './pages/main';
import Page1 from './pages/page1';
import Page2 from './pages/page2';

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
