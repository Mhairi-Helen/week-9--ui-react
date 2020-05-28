import React, { Component } from "react";


class Length extends Component {



    render() {
        return (
            <div className="form-group">
                <label>{this.props.label}</label>
                <input className="form-control" name={this.props.name} />
            </div>
        );
    }
}
export default Length;