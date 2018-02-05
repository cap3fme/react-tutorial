import * as React from "react";
import {User} from "../../models/user";
import {LoginComponent} from "../login/login";
import {MainframeComponent} from "../mainframe/mainframe";
import {Message} from "../../models/message";
import {MessageType} from "../../models/message";

interface Props {

}

interface State {
    readonly authenticatedUser: User | null;
    readonly message: Message | null;
}

export class AppComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            authenticatedUser: null,
            message: null
        };
    }

    render() {
        const {authenticatedUser, message} = this.state;

        const login = (user: User) => {
            console.log('login(' + user + ')');
            if (user.password == '123') {
                console.log('password correct');
                this.setState({
                    authenticatedUser: user,
                    message: null
                });
            } else {
                console.log('password NOT correct');
                this.setState({
                    message: {text: 'Das Passwort ist nicht korrekt!', type: MessageType.Error}
                });
            }
        };

        return (
            <div className="app-component">
                {authenticatedUser === null
                    ? <LoginComponent login={login} message={message}/>
                    : <MainframeComponent authenticatedUser={authenticatedUser}/>}
            </div>
        );
    }
}