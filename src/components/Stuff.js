import React from "react";

import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';
import Clicked from './Clicked';


const Stuff = ({ square }) => (
    <>
        <Header >Hello World</Header>
        <Paragraph >Lorem ipsum dolor sit amet consectetur adipisicing elit. A non quis nobis illum eveniet impedit ipsa dicta minus suscipit cum, doloribus ea accusantium unde, quas eum porro ipsam earum! Voluptas.</Paragraph>
        {!square ? (<Square color={"hotpink"} />) : null}
        <People />
        <Clicked />
    </>
);


Stuff.defaulProps = {
    square: true,
};

export default Stuff;