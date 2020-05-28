import React, { Component } from "react";



class Length extends Component {


  constructor(props) {
    super(props);
    // add the value of the input to the state
    this.state = { input: '' };

    this.handleChange = this.handleChange.bind(this);
  }


  // e is the standard DOM event object
  handleChange(e) {
    // e.currentTarget: DOM element we attached the event handler to use the value property to read its current value
    this.setState({ input: e.currentTarget.value });
  }

  render() {
    return (
      <div className='form-group'>
        <label >{this.props.label}</label>
        <input
          className='form-control'
          onChange={this.handleChange}
          placeholder={'Enter name...'}
          value={this.state.input}
          name={this.props.name} />
        <p className='form-text text-muted'>
          Length: {this.state.input.length} characters
        </p>
      </div>
    );
  }
}
export default Length;
