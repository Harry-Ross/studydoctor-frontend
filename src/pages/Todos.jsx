import React, { Component } from 'react'
import { Grommet, Nav, Anchor, Main, FormField, TextInput, Form, CheckBox, DropButton, Calendar } from 'grommet';
import { grommet } from 'grommet/themes'
import { Tooltip } from 'grommet-icons';
import todoService from '../services/todo-service';

class TodosPage extends Component {
    state = { 
        todoInput: "",
        todos: []
     }
    componentDidMount() {
        todoService.getTodos().then(todos => {
            this.setState({ todos })
        })
    }

    createTodo = (desc) => {
        todoService.createTodo(desc).then(res => {
            let newTodos = this.state.todos;
            newTodos.push({desc, checked: false})
            this.setState({
                todos: newTodos
            })
        })
    }

    completeTask = (index) => {
        todoService.completeTodo().then(res => {

        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <Form
                    onSubmit={() => {
                        this.createTodo(this.state.todoInput)
                        this.setState({
                            todoInput: "",
                        })
                    }}
                >
                    <FormField>
                        <TextInput 
                            value={this.state.todoInput}
                            placeholder="Todo here"
                            onChange={(event)=> {
                                this.setState({ todoInput: event.target.value })
                            }} 
                        />
                    </FormField>
                    <DropButton label="Due date" dropContent={<Calendar size="small" date={(new Date()).toISOString()} />}/>
                </Form>
                <br /> <br />
                <div className="todos">
                {this.state.todos.length > 0
                    ? this.state.todos.map(todo => <CheckBox onChange={(event) => this.completeTask(todo.index)} checked={todo.checked} label={todo.desc}></CheckBox>)
                    : <p>empty</p>
                }
                </div>
            </React.Fragment>
        );
    }
}
 
export default TodosPage;
