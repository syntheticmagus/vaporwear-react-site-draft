import React from "react";

function Filler(props) {
    function fill() {
        const elements = [];
        for (let idx = 0; idx < props.count; ++idx) {
            elements.push(<p style={{ color: "blue" }}>THIS SPACE FOR RENT</p>);
        }
        return elements;
    }

    return <>{fill()}</>;
}

export default Filler;
