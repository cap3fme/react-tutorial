import * as React from "react";
import {User} from "../../models/user";

interface Props {
    readonly authenticatedUser: User;
}

export class AvatarImage extends React.Component<Props> {
    render() {
        const {authenticatedUser} = this.props;

        return  <img src={authenticatedUser.userImage} title={authenticatedUser.name} alt={authenticatedUser.name} />;
    }
}