import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    reducer1: state.reducer1,
    reducer2: state.reducer2,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}


class App extends React.Component {
  add = () =>{
    this.props.dispatch({
      type:'add'
    })
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          {this.props.reducer1.num}
          <button onClick={this.add}>增加</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
