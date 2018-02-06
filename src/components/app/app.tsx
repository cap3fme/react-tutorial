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
                let type: MessageType = MessageType.Error;

                // Test für Validierung, kann später raus ->>
                if (user.password == 'info') {
                    type = MessageType.Info;
                }
                else if (user.password == 'warn') {
                    type = MessageType.Warning;
                }
                if (user.password == 'fatal') {
                    type = MessageType.Fatal;
                }
                // <<-

                this.setState({
                    message: {text: 'Das Passwort ist nicht korrekt!', type: type}
                });
            }
        };

        const logout = () => {
            this.setState({
                authenticatedUser: null
            });
        };

        return (
            <div className="app-component">
                {authenticatedUser === null
                    ? <LoginComponent login={login} message={message}/>
                    : <MainframeComponent authenticatedUser={authenticatedUser} logout={logout}/>}
            </div>
        );
    }
}