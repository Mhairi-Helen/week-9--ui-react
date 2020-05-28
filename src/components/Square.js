import React, { Component } from "react";

class Square extends Component {
    constructor(props) {
        super(props);

        this.state = {
            purple: true,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            purple: !this.state.purple,
        });
    }

    render() {
        let colour = this.state.purple ? "purple" : this.props.colour;

        return (
            <div
                onClick={this.handleClick}
                style={{
                    height: 200,
                    width: 200,
                    background: colour,
                    margin: "1rem"
                }}
            />
        );
    }
}

Square.defaultProps = {
    colour: "hotpink",
};

export default Square;