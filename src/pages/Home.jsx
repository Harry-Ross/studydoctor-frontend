import React, { Component } from 'react'
import { Distribution, Box, Anchor, List } from 'grommet';
import classroomService from '../services/classroom-service';
import authService from '../services/auth-service';
import todoService from '../services/todo-service';
import Timer from '../components/timer';
import { Redirect } from 'react-router-dom';

class HomePage extends Component {
    componentDidMount() {
        authService.getCurrentUser().then(data => {
            this.setState({
                user: data.user
            })
        })
        classroomService.getClasswork().then(data => {
            let classwork = data.map(work => {
                console.log(work)
                return({
                    link: work.alternateLink,
                    title: work.title,
                    dueDate: new Date(`${work.dueDate.month}-${work.dueDate.day}-${work.dueDate.year}`),
                    courseId: work.courseId
                })
            })
            this.setState({
                classwork
            })
        }).catch(e => console.error(e))

        todoService.getTodos().then(data => {
            this.setState({
                todos: data
            })
        })

        
    }
    state = { 
        user: {},
        classwork: [],
        todos: []
    }

    render() { 
        return (
            <div>
                {this.state.user
                    ?   <div>
                            <h1>Hi {this.state.user.firstname}, welcome to StudyDoctor!</h1>
                            <h3>Here's what's on the agenda:</h3>
                            <Distribution
                            values={[
                                { value: 50, color: 'light-3', heading: "Todos", child: (<Todos todos={this.state.todos} />) },
                                { value: 30, color: 'neutral-3', heading: "Classwork", child: (<Classwork classwork={this.state.classwork} />) },
                                { value: 20, color: 'neutral-4', heading: "Pomodoro", child: <Timer /> },
                            ]} fill={true} basis="auto"
                            >
                            {value => (
                                <Box pad="small" background={value.color} fill>
                                    <h3>{value.heading}</h3>
                                    {value.child}
                                </Box>
                            )}
                            </Distribution>
                        </div>
                    : <Redirect to="/auth"/>
                }
                
            </div>
        );
    }
}

function Classwork(props) {
    return(
        <div>
            {props.classwork.map(work => <Anchor href={work.link}><p>{work.title}</p></Anchor>)}
        </div>
    )
}

function Todos(props) {
    return(
        <div>
        {props.todos
            ? <List primaryKey="title" secondaryKey="dueDate" data={props.todos}/>
            : <span>empty</span>
        }
        </div>
    )
}
 
export default HomePage;