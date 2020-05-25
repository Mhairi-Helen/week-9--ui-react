import React from "react";

const Square = ({ color }) => (
    <div style={{ backgroundColor: color, margin: "2rem", height: 200, width: 200 }}>

    </div >

);

Square.defaultProps = {

    color: 'purple',

};


export default Square;