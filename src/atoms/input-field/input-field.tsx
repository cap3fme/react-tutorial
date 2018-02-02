import * as React from "react";

interface Props {
    readonly onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export class InputField extends React.Component<Props> {
    render() {
        const {onChange} = this.props;

        return <input className="input-field" onChange={onChange}/>;
    }
}