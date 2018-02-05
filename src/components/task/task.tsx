import * as React from "react";
import {InputField} from "../../atoms/input-field/input-field";

interface Props {

}

interface State {
    readonly taskItems: string[];
    readonly newTaskItem:string | null;
    readonly taskChecked:boolean | false;
}

export class TaskComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            taskItems: ['1.Aufgabe', '2.Aufgabe'],
            newTaskItem:null,
            taskChecked:false
        }
    }

    private updateTaskItem = (event: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({newTaskItem: event.currentTarget.value});

    private checkTaskItem=(event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({taskChecked: event.currentTarget.checked});
        console.log('Eintrag ausgewählt');
    }



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

                <ul className="toDoItems">
                    {taskItems.map(taskItem =>
                            <li key={taskItem}>
                                <input key={taskItem} type="checkbox" onChange={this.checkTaskItem}/>
                                <label htmlFor="{taskItem}">{taskItem}</label>
                            </li>
                        )}
                </ul>
            </section>
        );
    }
}

