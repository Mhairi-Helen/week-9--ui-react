import React, { Component } from "react";



class Paragraph extends Component {

    render() {
        let { children } = this.props;

        return (
            <header className="jumbotron">
                <p>{children}</p>
            </header>
        );
    }
}



export default Paragraph;