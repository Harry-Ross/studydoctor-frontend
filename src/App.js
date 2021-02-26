import React, { Component } from 'react';
import { Grommet, Nav, Anchor, Main, FormField, TextInput, Form, CheckBox } from 'grommet';
import { grommet } from 'grommet/themes'
import './App.css';

class App extends Component {
    state = { 
        todoInput: "",
        todos: []
     }
    componentDidMount() {
        let todoDescs = localStorage.getItem('todos').split(';');
        let todos = todoDescs.map(todoDesc => {return({desc: todoDesc, checked: false})} )
        this.setState({
            todos
        })
    }
    render() { 
        return ( 
            <div className="App">
                <Grommet theme={grommet}>
                    <Nav background="dark-1" pad="medium">
                        <Anchor>yo</Anchor>
                    </Nav>
                    <Main>
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
                        {this.state.todos.length > 0
                            ? this.state.todos.map(todo => { return(<CheckBox checked={false} label={todo}></CheckBox>)})
                            : <p>empty</p>
                        }
                    </Main>
                </Grommet>
            </div>
        );
    }
}
 
export default App;
