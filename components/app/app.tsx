import * as React from "react";
import {HeaderComponent} from "../header/header";
import {SidebarComponent} from "../sidebar/sidebar";
import {ContentComponent} from "../content/content";

interface Props {

}

interface State {
    readonly selectedNavigationItem: string;
}

export class AppComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            selectedNavigationItem: ""
        };
    }

    render() {
        const {selectedNavigationItem} = this.state;

        const selectNavigationItem = (navigationItem: string) => {
            this.setState({
                selectedNavigationItem: navigationItem
            });
        };

        return (
            <div className="app-component">
                <HeaderComponent/>

                <div className="container">
                    <SidebarComponent selectedNavigationItem={selectedNavigationItem} selectNavigationItem={selectNavigationItem}/>
                    <ContentComponent selectedNavigationItem={selectedNavigationItem}/>
                </div>
            </div>
        );
    }
}