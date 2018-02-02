import * as React from "react";
import {HeaderComponent} from "../header/header";
import {SidebarComponent} from "../sidebar/sidebar";
import {ContentComponent} from "../content/content";

export class AppComponent extends React.Component {
    render() {
        return (
            <div className="app-component">
                <HeaderComponent/>

                <div className="container">
                    <SidebarComponent/>
                    <ContentComponent/>
                </div>
            </div>
        );
    }
}