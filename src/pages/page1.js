import React from 'react';


class Page1 extends React.Component {
  onClick = () =>{
    this.props.history.push('/main')
  }
  render() {
    console.log(this.props)
    return (
      <div className="sty">
        11111
      </div>
    );
  }

}

export default Page1;
