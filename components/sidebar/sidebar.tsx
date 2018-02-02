import * as React from "react";

interface Props {
    readonly selectNavigationItem: (navigationItem: string) => void;
}

interface State {

}

export class SidebarComponent extends React.Component<Props, State> {
    render() {
        const selectNavigationItem = this.props.selectNavigationItem;

        return (
            <aside className="sidebar-component">
                {navigationItems.map(navigationItem =>
                    <button key={navigationItem}
                            onClick={() => selectNavigationItem(navigationItem)}>{navigationItem}</button>)}
            </aside>
        );
    }
}

const navigationItems = [
    "Übersicht", "Disposition", "Meldungen"
];