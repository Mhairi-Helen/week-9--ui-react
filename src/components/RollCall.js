import React, { Component } from "react";

class RollCall extends Component {

    //setting up initial state
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }


    //updating the state when events are fired
    handleClick() {
        let { names } = this.props;

        this.setState({
            index: (this.state.index + 1) % names.length,
        });

    }

    //displaying values based on this.state in JSX
    render() {
        let { index } = this.state;
        let { names } = this.props;

        return (
            <>
                <h1>Roll Call!</h1>
                <p className="card card-body">{names[index]}</p>
                <button className="btn btn-primary" onClick={this.handleClick}>Next</button>
            </>

        );
    }
}


export default RollCall;