import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
    };
  }
  handleNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <label>UserName</label>
        <input
          type="text"
          value={this.state.userName}
          onChange={this.handleNameChange}
        />
      </div>
    );
  }
}

export default Form;
