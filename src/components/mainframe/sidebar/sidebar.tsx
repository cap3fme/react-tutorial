import * as React from "react";

interface Props {
    readonly selectedNavigationItem: string;
    readonly selectNavigationItem: (navigationItem: string) => void;
}

interface State {

}

export class SidebarComponent extends React.Component<Props, State> {
    render() {
        const {selectedNavigationItem, selectNavigationItem} = this.props;

        return (
            <aside className="sidebar-component">
                {navigationItems.map(navigationItem =>
                    <button key={navigationItem}
                            className={navigationItem === selectedNavigationItem ? "selected" : ""}
                            onClick={() => selectNavigationItem(navigationItem)}>{navigationItem}</button>)}
            </aside>
        );
    }
}

const navigationItems = [
    "Übersicht", "Disposition", "Meldungen"
];