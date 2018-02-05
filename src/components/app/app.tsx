import * as React from "react";
import {User} from "../../models/user";
import {LoginComponent} from "../login/login";
import {MainframeComponent} from "../mainframe/mainframe";

interface Props {

}

interface State {
    readonly authenticatedUser: User | null;
}

export class AppComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            authenticatedUser: null
        };
    }

    render() {
        const {authenticatedUser} = this.state;

        const login = (user: User) => {
            this.setState({
                authenticatedUser: user
            });
        };

        const logout = () => {
            this.setState({
                authenticatedUser: null
            });
        };

        return (
            <div className="app-component">
                {authenticatedUser === null
                    ? <LoginComponent login={login}/>
                    : <MainframeComponent authenticatedUser={authenticatedUser} logout={logout}/>}
            </div>
        );
    }
}