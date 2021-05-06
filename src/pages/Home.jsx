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
                            <div className="home-content">
                                <div className="home-1">
                                    <HomeBox heading="Todos" color="light-3">
                                        <Todos todos={this.state.todos} />
                                    </HomeBox>
                                </div>
                                <div className="home-2">
                                    <HomeBox heading="Classwork" color="neutral-3">
                                        <Classwork classwork={this.state.classwork} />
                                    </HomeBox>
                                </div>
                                <div className="home-3">
                                    <HomeBox heading="Pomodoro" color="neutral-4">
                                        <Timer />
                                    </HomeBox>
                                </div>
                            </div>
                        </div>
                    : <p>fuck</p>
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

function HomeBox(props) {
    return(
        <Box pad="small" background={props.color} fill>
            <h3>{props.heading}</h3>
            {props.children}
        </Box>
    )
}
 
export default HomePage;