import React, { Component } from "react";

import Counter from "./Counter";

class Counters extends Component {
  state = {
    value: 0
  };

  handleIncrement=()=>{

    this.setState({value:this.state.value+1})
    
  }

  
  //passing childrent to counter component

  render() {
    return (
      <React.Fragment>
        <Counter onIncrement={this.handleIncrement} value={this.state.count} selected={true}/>
      </React.Fragment>
    );
  }
}

export default Counters;
