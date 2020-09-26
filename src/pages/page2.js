import React from 'react';


class Page2 extends React.Component {
  onClick = () =>{
    this.props.history.push('/main')
  }
  render() {
    console.log(this.props)
    return (
      <div className="sty">
        22222
      </div>
    );
  }

}

export default Page2;