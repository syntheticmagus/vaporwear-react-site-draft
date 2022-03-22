import React from "react";
import "./Byline.css";

class Byline extends React.Component {
    container;

    constructor(props) {
        super(props);
        this.state = {
            textPosition: props.textPosition,
            text: props.text,
            opacity: 0
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", () => {
            console.log(this.container);
            const rect = this.container.getBoundingClientRect();
            const position = rect.top + rect.bottom / 2;
            const normalizedOffset = Math.abs((position - (window.innerHeight / 2)) / (window.innerHeight / 2));
            this.setState({ opacity: 1 - Math.max(0, Math.min(1, normalizedOffset - 0.9)) });
        });
    }

    render() {
        return <>
            <div className="bylineContainer" style={{opacity: this.state.opacity}} ref={(element) => { this.container = element }}>
                <h2 className="bylineText" style={{ left: this.state.textPosition === "left" ? "15%" : undefined, right: this.state.textPosition === "right" ? "15%" : undefined }}>{this.state.text}</h2>
                <img className="bylineImage" src="./watch_sandbox.png" style={{ left: this.state.textPosition === "right" ? "10%" : undefined, right: this.state.textPosition === "left" ? "10%" : undefined }} />
            </div>
        </>;
    }
}

export default Byline;
