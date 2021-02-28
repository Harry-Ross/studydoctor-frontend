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
            let todos = todoDescs.map(todoDesc => {return({desc: todoDesc, checked: (Math.round(Math.random()) == 1)})} )
            this.setState({
                todos
            })
        }        
    }
    render() { 
        return ( 
            <React.Fragment>
                <Form
                    onSubmit={() => {
                        console.log(this.state.todoInput)
                        var localTodos = localStorage.getItem('todos')
                        localStorage.setItem('todos', `${localTodos};${this.state.todoInput}`)
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
                    ? this.state.todos.map(todo => <CheckBox checked={todo.checked} label={todo.desc}></CheckBox>)
                    : <p>empty</p>
                }
                </div>
            </React.Fragment>
        );
    }
}
 
export default TodosPage;
