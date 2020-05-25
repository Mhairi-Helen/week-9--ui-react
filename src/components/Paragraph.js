import React from "react";





const Paragraph = ({ children }) => (
    children ? <p>{children}</p> : null
);

export default Paragraph;