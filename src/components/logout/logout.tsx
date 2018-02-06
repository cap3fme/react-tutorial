import * as React from "react";

interface Props {
    readonly logout: () => void;
}

interface State {
    readonly username: string;
}

export class LogoutComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            username: "",
        }
    }

    render() {
        const {logout} = this.props;
        const {username} = this.state;

        //const isSubmitDisabled = username !== null;

        const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            if (username !== null ) {
                logout();
            }
        };

        return (
            <div className="logout-component">
                <form onSubmit={onSubmit}>
                    <p>
                        <button>Logout</button>
                    </p>
                </form>
            </div>
        );
    }


}