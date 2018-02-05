import * as React from "react";
import {InputField} from "../../atoms/input-field/input-field";

interface Props {

}

interface State {
    readonly taskItems: string[];
    readonly newTaskItem:string | null;

}

export class TaskComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            taskItems: ['1.Aufgabe', '2.Aufgabe'],
            newTaskItem:null
        }
    }

    private updateTaskItem = (event: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({newTaskItem: event.currentTarget.value});

    render() {
        const {taskItems,newTaskItem} = this.state;
        const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            if (newTaskItem !==null){
                const newTaskItems= taskItems.concat(newTaskItem);
                this.setState({taskItems:newTaskItems})
            }

        }
        return (
            <section className="task-component">
                <header><h1>Aufgabenliste</h1></header>
                <form onSubmit={onSubmit}>
                    <InputField onChange={this.updateTaskItem} /> <button>hinzufügen</button>
                </form>

                <ul>
                    {taskItems.map(taskItem =>
                        <li key={taskItem}>{taskItem}</li>)}
                </ul>
            </section>
        );
    }
}

