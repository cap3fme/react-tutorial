import * as React from "react";

interface Props {
    readonly selectedSubNavigationItem: string;
    readonly selectSubNavigationItem: (subNavigationItem: string) => void;
}

interface State {

}

export class SidebarComponent extends React.Component<Props, State> {
    render() {
        const {selectedSubNavigationItem, selectSubNavigationItem} = this.props;

        return (
            <aside className="sidebar-component">
                <div className="subMenu">
                    {subNavigationItems.map(subNavigationItem =>
                        <button key={subNavigationItem}
                                className={subNavigationItem === selectedSubNavigationItem ? "selected" : ""}
                                onClick={() => selectSubNavigationItem(subNavigationItem)}>{subNavigationItem}</button>)}
                </div>
            </aside>
        );
    }
}

const subNavigationItems = [
    "Übersicht", "Disposition", "Meldungen"
];