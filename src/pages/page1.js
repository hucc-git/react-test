import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd'
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
const Page1 = React.memo((props) => {
  const [count, setCount] = React.useState(0);
  const onClick = () => {
    props.dispatch({ type: 'reducer1/add' })
  }
  const goto = () => {
    props.history.push({ pathname: '/main/page3', state: { sss: '243124' } })
  }
  return <div className="sty">
    <span onClick={onClick}>{props.reducer1.num}</span>
    <br></br>
    <span onClick={() => setCount(count + 1)}>{count}</span>
    <Button onClick={goto}>跳转</Button>
  </div>
})

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
