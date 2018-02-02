import * as React from "react";
import {HeaderComponent} from "../header";
import {SidebarComponent} from "../sidebar";
import {ContentComponent} from "../content";

export class AppComponent extends React.Component {
    render() {
        return (
            <div className="app-component">
                <HeaderComponent/>
                <SidebarComponent/>
                <ContentComponent/>
            </div>
        );
    }
}