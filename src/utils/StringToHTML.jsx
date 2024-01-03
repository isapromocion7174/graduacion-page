import React from "react";
import Parse from "html-react-parser";
const StringToHTML = ({ html }) => {
    return <>{Parse(html)}</>;
};

export default StringToHTML;
