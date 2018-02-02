import * as React from "react";

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
            default:
                return <div>Alles andere</div>;
        }
    };
}