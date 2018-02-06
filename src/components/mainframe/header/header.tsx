import * as React from "react";
import {User} from "../../../models/user";
import {AvatarImage} from "../../../atoms/avatar/avatar";
import {LogoutComponent} from "../../logout/logout";

interface Props {
    readonly authenticatedUser: User;
    readonly logout: () => void;
}

interface State {
    readonly username: string | null;
    readonly password: string | null;
}


export class HeaderComponent extends React.Component<Props, State> {
    render() {

        const {logout} = this.props;
        //const {username, password} = this.state;

        //const isSubmitDisabled = username === null || password === null;
        const {authenticatedUser} = this.props;

        console.log({authenticatedUser});

        return (
            <header className="header-component">

                <div className="userImage">
                    <AvatarImage authenticatedUser={authenticatedUser}/>
                </div>

                <div className="name">
                    {authenticatedUser.name}
                </div>

                <div className="logout">
                    <LogoutComponent logout={logout} />
                </div>

            </header>
        );
    }
}