import React from "react";

import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Clicked from "./Clicked";
import CatchMeIfYouCan from "./CatchMeIfYouCan";
import ToggleText from "./ToggleText";
import Counter from "./Counter";
import RollCall from "./RollCall";

const Stuff = ({ square }) => (
  <>
    <CatchMeIfYouCan jump={100} />
    <Header>Hello World</Header>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A non quis nobis
      illum eveniet impedit ipsa dicta minus suscipit cum, doloribus ea
      accusantium unde, quas eum porro ipsam earum! Voluptas.
    </Paragraph>
    {!square ? <Square color={"hotpink"} /> : null}
    <People />
    <Clicked />
    <ToggleText />
    <Counter initial={50} max={100} />
    <RollCall
      let
      names={[
        "James P. Sullivan",
        "Mike Wazowski",
        "Boo",
        "Randall Boggs",
        "Roz",
        "Fungus",
      ]}
    />
  </>
);

Stuff.defaulProps = {
  square: true,
};

export default Stuff;
