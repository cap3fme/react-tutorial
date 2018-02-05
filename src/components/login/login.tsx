import * as React from "react";
import {InputField} from "../../atoms/input-field/input-field";
import {User} from "../../models/user";

interface Props {
    readonly login: (user: User) => void;
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
        const {login} = this.props;
        const {username, password} = this.state;

        const isSubmitDisabled = username === null || password === null;

        const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            if (username !== null && password !== null) {
                login({
                    id: 1,
                    username: username,
                    password: password,
                    name: "Peter Hansen",
                    userImage: "https://s.gravatar.com/avatar/9346b9a8366d2720cba5ef2908b72619?s=40",
                    email: "test@esn.de"
                });
            }
        };

        return (
            <div className="login-component">
                <form onSubmit={onSubmit}>
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