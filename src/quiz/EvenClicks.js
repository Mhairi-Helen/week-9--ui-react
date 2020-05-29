import React, { Component, Fragment } from "react";


class EvenClicks extends Component {

    //set up the initial state using the constructor method
    constructor(props) {
        super(props);

        this.state = {
            clicks: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    };


    //update the state when an event occurs
    handleClick() {
        let { clicks } = this.state;

        this.setState({ clicks: clicks + 1 });

        //console.log(this.state.clicks);

    }

    //render the state using JSX

    render() {

        return (
            <Fragment>
                <h2>Even Clicks</h2>
                <p className="btn btn-primary" onClick={this.handleClick}>
                    {this.state.clicks % 2 === 0 ? "Even" : "Odd"}
                </p>
            </Fragment>
        );
    }

};

export default EvenClicks;