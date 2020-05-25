import React from 'react';


let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = () => (
    <ul className="list-group">
        {names.map((value, index) => (
            <li className="list-group-item" key={index}>
                <a className="list-group-item list-group-item-action" href={"/" + value}>{value}</a>
            </li>
        ))}

    </ul>
);

export default People;