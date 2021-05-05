import React, { Component } from 'react'
import { FormField, TextInput, Form, DropButton, Calendar, Button} from 'grommet';
import { grommet } from 'grommet/themes'
import { Tooltip } from 'grommet-icons';
import todoService from '../services/todo-service';
import DetailsPanel from '../components/details-panel';

class TodosPage extends Component {
    state = { 
        todoInput: "",
        descInput: "",
        dateInput: "",
        todos: [],
        details: {
            title: "",
            description: "",
            classroomTask: "",
            dueDate: "",
            uuid: ""
        }
     }
    componentDidMount() {
        todoService.getTodos().then(todos => {
            this.setState({ todos })
        })
    }

    createTodo = (title, desc, dueDate) => {
        todoService.createTodo(title, desc).then(res => {
            let newTodos = this.state.todos;
            newTodos.push({desc, checked: false})
            if (res.success) {
                this.setState({
                    todos: newTodos,
                    todoInput: "",
                })
            } else {
                this.setState({
                    todoInput: "ERROR",
                })
            }
        })
    }

    completeTask = (id, index) => {
        todoService.completeTodo(id).then(data => {
            if (data.success) {
                let newTodos = this.state.todos;
                newTodos.splice(index, 1);
                this.setState({
                    todos: newTodos
                })
            }
        })
    }

    handleSelect = (title, description, dueDate, classroomTask, uuid) => {
        this.setState({
            details: {
                title, description, dueDate, classroomTask, uuid
            }
        })
        console.log(title)
    }

    render() { 
        return ( 
            <React.Fragment>
                <Form
                    onSubmit={() => {
                        this.createTodo(this.state.todoInput, this.state.descInput, this.state.dueDate)
                    }}
                >
                    <FormField>
                        <TextInput 
                            value={this.state.todoInput}
                            placeholder="Title here"
                            onChange={(event)=> {
                                this.setState({ todoInput: event.target.value })
                            }} 
                        />
                        <TextInput 
                            value={this.state.descInput}
                            placeholder="Description here"
                            onChange={(event)=> {
                                this.setState({ descInput: event.target.value })
                            }} 
                        />
                    </FormField>
                    <DropButton label="Due date" dropContent={
                        <Calendar 
                            size="small" 
                            date={this.state.dueDate} 
                            onSelect={(date) => { this.setState({ dueDate: date }) }}
                        />
                    }/>
                    <Button type="submit" primary label="Submit" />
                </Form>
                <br /> <br />
                <div className="split">
                    <div className="todos">
                        {this.state.todos.length > 0
                            ? this.state.todos.map((todo, index) => 
                                <div key={todo.title}>
                                    <input 
                                        key={todo.title}
                                        type="checkbox"
                                        onChange={(event) => this.completeTask(index)} 
                                        defaultChecked={todo.checked} 
                                    /> <span onClick={() => this.handleSelect(todo.title, todo.description, todo.dueDate, todo.classroomTask, todo.uuid)}>{todo.title}</span>
                                </div>
                            )
                            : <p>empty</p>
                        }
                    </div>
                    <DetailsPanel 
                        details={this.state.details}
                    />
                </div>
            </React.Fragment>
        );
    }
}

function todoItem() {

}
 
export default TodosPage;
