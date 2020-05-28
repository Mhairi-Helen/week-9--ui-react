import React, { Component } from "react";


class ToggleText extends Component {

    constructor(props) {
        super(props);

        this.state = {
            initial: true,
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.setState({ initial: !this.state.initial });
    }

    render() {
        let { initial, alternate } = this.props;

        return (
            <div className="card">
                <h5 >Toggle Text</h5>
                <p className="btn btn-primary" onClick={this.handleClick}> {this.state.initial ? initial : alternate} </p>
            </div>
        );
    }

};

ToggleText.defaultProps = {
    initial: "Hello",
    alternate: "World",
};


export default ToggleText;