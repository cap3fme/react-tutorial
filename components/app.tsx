import * as React from "react";
import {HeaderComponent} from "./header";
import {SidebarComponent} from "./sidebar";

export class AppComponent extends React.Component {
    render() {
        return (
            <div className="app-component">
                <HeaderComponent/>
                <SidebarComponent/>
            </div>
        );
    }
}