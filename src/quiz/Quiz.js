import React from "react";


import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Multiplier from "./Multiplier";
import EvenClicks from "./EvenClicks"


const Quiz = () => (
    <>

        <Header>Quiz Questions</Header>
        <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A non quis nobis
            illum eveniet impedit ipsa dicta minus suscipit cum, doloribus ea
            accusantium unde, quas eum porro ipsam earum! Voluptas.
        </Paragraph>
        <Multiplier x={5} y={7} />
        <EvenClicks />

    </>
);


export default Quiz;
