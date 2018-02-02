import * as React from "react";
import {User} from "../../../models/user";

interface Props {
    readonly authenticatedUser: User;
}

export class HeaderComponent extends React.Component<Props> {
    render() {
        const {authenticatedUser} = this.props;

        return (
            <header className="header-component">
                {authenticatedUser.username}
            </header>
        );
    }
}