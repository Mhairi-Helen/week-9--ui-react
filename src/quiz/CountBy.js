import React, { Component, Fragment } from "react";


class CountBy extends Component {

    //set up the initial state using the constructor method
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.handleClick = this.handleClick.bind(this);

    };


    //update the state when an event occurs
    handleClick() {
        let { count } = this.state;
        let { step } = this.props;

        this.setState({ count: count + step });

        //console.log(this.state.clicks);

    };



    //render the state using JSX
    render() {

        let { step } = this.props;
        let { count } = this.state;

        return (

            <Fragment>
                <h2>Count By...s</h2>
                <p>
                    {count}
                </p>
                <p className="btn btn-primary" onClick={this.handleClick}>
                    Push Me.
                </p>
            </Fragment>
        );
    };
};



export default CountBy;