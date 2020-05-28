import React, { Component } from "react";



class PasswordStrength extends Component {

    //setting up the initial state
    constructor(props) {
        super(props);
        // add the value of the input to the state
        this.state = { input: '' };

        this.handleChange = this.handleChange.bind(this);

    }

    //updating the state when events are fired
    // e is the standard DOM event object
    handleChange(e) {
        // e.currentTarget: DOM element we attached the event handler to use the value property to read its current value
        this.setState({ input: e.currentTarget.value });
    }



    //displaying values based on this.state in JSX
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input
                    type='password'
                    className='form-control'
                    onChange={this.handleChange}
                    placeholder={'Enter password...'}
                    value={this.state.input}
                    name={this.props.name}
                />
            </div>
        );
    }

}

export default PasswordStrength;