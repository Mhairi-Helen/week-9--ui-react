import React, { Component } from "react";
// we use className to add classes for Bootstrap styling



class Clicked extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.setState({ clicked: true });
    }

    render() {

        return (
            <p className="alert alert-primary mt-4" onClick={this.handleClick}>{this.state.clicked ? "Clicked" : "Not clicked"}</p>
        );
    }

};


export default Clicked;