import * as React from "react";
import {TaskComponent} from "../../task/task";

interface Props {
    readonly selectedNavigationItem: string;
}

export class ContentComponent extends React.Component<Props> {
    render() {
        return (
            <div className="content-component">
                {this.renderContent(this.props.selectedNavigationItem)}
            </div>
        );
    }

    private renderContent = (navigationItem: string) => {
        switch (navigationItem) {
            case "Übersicht":
                return <div>Übersicht</div>;
                return(
                    <div>
                    <div>Übersicht</div>
                    <TaskComponent/>
                    </div>
                    )

            default:
                return <div>Alles andere</div>;
        }
    };
}