import * as React from "react";
import {HeaderComponent} from "./header/header";
import {ContentComponent} from "./content/content";
import {SidebarComponent} from "./sidebar/sidebar";
import {User} from "../../models/user";

interface Props {
    readonly authenticatedUser: User;
}

interface State {
    readonly selectedNavigationItem: string;
}

export class MainframeComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            selectedNavigationItem: ""
        };
    }

    render() {
        const {authenticatedUser} = this.props;
        const {selectedNavigationItem} = this.state;

        const selectNavigationItem = (navigationItem: string) => {
            this.setState({
                selectedNavigationItem: navigationItem
            });
        };

        return (
            <div className="mainframe-component">
                <HeaderComponent authenticatedUser={authenticatedUser}/>

                <div className="container">
                    <SidebarComponent selectedNavigationItem={selectedNavigationItem}
                                      selectNavigationItem={selectNavigationItem}/>
                    <ContentComponent selectedNavigationItem={selectedNavigationItem}/>
                </div>
            </div>
        )
    }
}