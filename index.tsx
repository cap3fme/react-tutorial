import * as React from "react";
import * as ReactDOM from "react-dom";

class HelloMessage extends React.Component<{ name: string }, {}> {
    render() {
        return (
            <div>
                Hello {this.props.name}.
            </div>
        );
    }
}

ReactDOM.render(
    <HelloMessage name="Welt" />,
    document.querySelector(".root")
);