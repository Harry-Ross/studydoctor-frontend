import React, { Component } from 'react'
import { Grommet, Nav, Anchor, Main, FormField, TextInput, Form, CheckBox } from 'grommet';
import { grommet } from 'grommet/themes'
import { Tooltip } from 'grommet-icons';

class TodosPage extends Component {
    state = { 
        todoInput: "",
        todos: []
     }
    componentDidMount() {
        let localTodos = localStorage.getItem('todos');
        if (localTodos != null) {
            let todoDescs = localStorage.getItem('todos').split(';') 
            let todos = []
            for (let i = 0; i < todoDescs.length; i++) {
                todos.push({
                    index: i,
                    desc: todoDescs[i],
                    checked: false
                })
            }
            this.setState({
                todos
            })
        }        
    }

    createTodo = (desc) => {
        let localTodos = localStorage.getItem('todos')
        localStorage.setItem('todos', `${desc};${localTodos}`)

        let newTodos = this.state.todos;
        newTodos.push({desc, checked: false})
        this.setState({
            todos: newTodos
        })
    }

    completeTask = (index) => {
        let newTodos = this.state.todos;
        newTodos[index].checked = !newTodos[index].checked;
        this.setState({
            todos: newTodos
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
                </Form>
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
