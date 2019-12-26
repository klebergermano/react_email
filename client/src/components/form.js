import React, { Component } from "react";
class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "Fulano",
      email: "constato@fulano.com.br"
    };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = event => {
    const data = this.state;
    fetch("/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleNameChange}
            value={this.state.name}
          />
          <input
            type="text"
            onChange={this.handleEmailChange}
            value={this.state.email}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
