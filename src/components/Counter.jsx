import React, { Component } from "react";
import counter from "./counter.css";

class Counter extends Component {
  state = {
    count: this.props.value,
    selected: this.props.selected,
    image: "https://picsum.photos/200",
    // tags: ["tag1", "tage2", "tag3"]

    tags: [
      { id: 1, value: 4 },

      { id: 1, value: 0 },

      { id: 1, value: 0 },

      { id: 1, value: 0 }
    ]
  };

  //whenever we need to pass the argument to the events we need to do this that way

  // () => handleIncrement({id : 1}) // and get it like this way handleIncrement= product =>{console.log(product)}

  handleIncrement = product => {
    console.log(product);

    this.setState({ count: this.state.count + 1 });
    //passing childrens
    // console.log(this.props.children.props.children);
    console.log("item is clicked", this.state.count);
  };

  render() {
    //encapsulating the classes
    return (
      <div>
        <img src={this.state.image} />
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button
          className="btn btn-secondary m-2"
          onClick={() => this.handleIncrement({ id: 1 })}
          style={counter.counter}
        >
          Increment
        </button>

        <button
          className="btn btn-secondary m-2"
          onClick={this.props.onIncrement}
          style={counter.counter}
        >
          Increment/Rasing up and handling state
        </button>

        {this.state.tags.length === 0 && "please create new tags!"}
        <ul>{this.renderTags()}</ul>
        
      </div>

      //redering list or array above
    );
  }

  renderTags() {
    // if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count == 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    const { count } = this.state;
    const element = <h3>zero</h3>;
    return count == 0 ? element : count;
  }
}

export default Counter;
//ever class is an object so thats why this is refering the current object
