import React from "react";



//this doesn't need state so it's currently a function
const Multiplier = ({ x, y }) => (

    <>
        <h2>Multiplier</h2>
        <p>{x * y}</p>
    </>
);

export default Multiplier;