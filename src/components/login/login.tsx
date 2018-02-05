import * as React from "react";
import {InputField} from "../../atoms/input-field/input-field";
import {User} from "../../models/user";
import {MessageComponent} from "../message/message";
import {Message} from "../../models/message";

interface Props {
    readonly login: (user: User) => void;
    readonly message: Message | null;
}

interface State {
    readonly username: string | null;
    readonly password: string | null;
}

export class LoginComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            username: null,
            password: null
        }
    }

    render() {
        const {login, message} = this.props;
        const {username, password} = this.state;

        const isSubmitDisabled = username === null || password === null;

        const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            if (username !== null && password !== null) {
                login({
                    id: 1,
                    username: username,
                    password: password,
                    email: ""
                });
            }
        };

        return (
            <div className="login-component">
                <form onSubmit={onSubmit}>
                    <MessageComponent message={message}/>
                    <p>
                        <label>
                            <span>Username</span>
                            <InputField onChange={this.updateUsername}/>
                        </label>
                    </p>
                    <p>
                        <label>
                            <span>Password</span>
                            <InputField onChange={this.updatePassword}/>
                        </label>
                    </p>
                    <p>
                        <button disabled={isSubmitDisabled}>Login</button>
                    </p>
                </form>
            </div>
        );
    }

    private updateUsername = (event: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({username: event.currentTarget.value});

    private updatePassword = (event: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({password: event.currentTarget.value});
}