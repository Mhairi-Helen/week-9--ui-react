import React, { Component } from 'react';


let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];



class People extends Component {
    constructor(props) {
        super(props);
    };

    handleClick() {
        console.log("hello world");
    }


    render() {

        return (names ? (
            <ul className="list-group" onClick={this.handleClick} >
                {names.map((name, index) => (
                    <li className="list-group-item" key={index}>
                        <span className="list-group-item list-group-item-action" href={"/" + name}>{name}</span>
                    </li>))}
            </ul>) : <p>Nothing to see here</p>);
    }



}

export default People;