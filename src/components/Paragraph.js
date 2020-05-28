import React, { Component } from "react";



class Paragraph extends Component {

    render() {
        const { children } = this.props;

        return (
            <header className="jumbotron">
                <p>{children}</p>
            </header>
        );
    }
}



export default Paragraph;