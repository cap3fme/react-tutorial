import * as React from "react";
import {Message} from "../../models/message";

interface Props {
    readonly message: Message | null;
}

export class MessageComponent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {message} = this.props;
        return (
            message !== null
                ? <span>{message.type}: {message.text}</span>
                : null
        );
    }

}