import * as React from "react";
import {User} from "../../../models/user";
import {AvatarImage} from "../../../atoms/avatar/avatar";
import {LogoutComponent} from "../../logout/logout";

interface Props {
    readonly authenticatedUser: User;
    readonly logout: () => void;
    readonly selectedNavigationItem: string;
    readonly selectNavigationItem: (navigationItem: string) => void;
}

interface State {
    readonly username: string | null;
    readonly password: string | null;
}


export class HeaderComponent extends React.Component<Props, State> {
    render() {

        const {logout} = this.props;
        const {selectedNavigationItem, selectNavigationItem} = this.props;
        const {authenticatedUser} = this.props;

        console.log({authenticatedUser});

        return (
            <header className="header-component">

                <aside className="sidebar-component">
                    <div className="subMenu">
                        {navigationItems.map(navigationItem =>
                            <button key={navigationItem}
                                    className={navigationItem === selectedNavigationItem ? "selected" : ""}
                                    onClick={() => selectNavigationItem(navigationItem)}>{navigationItem}</button>)}
                    </div>
                </aside>

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

const navigationItems = [
    "Übersicht", "Disposition", "Meldungen"
];