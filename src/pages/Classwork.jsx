import { List, Menu, FileInput, Accordion, AccordionPanel } from 'grommet'
import { More } from 'grommet-icons';
import React, { Component } from 'react'
import classroomService from '../services/classroom-service'

const data = [];

for (let i = 0; i < 5; i += 1) {
  data.push({
    entry: `file-${i + 1}.txt`,
  });
}

class ClassworkPage extends Component {
    state = { 
        classes: [],
        classwork: []
     }
    componentDidMount() {
        classroomService.getClasses().then(data => {
            let classes = data.map(classroom => { return ({id: classroom.id, name: classroom.name}) })
            this.setState({
                classes
            })
        }).catch(e => console.error(e))
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
    }
    render() { 
        return ( 
            <div>
                <Accordion>
                    { this.state.classes.map(classroom => {
                        let currentClasswork = this.state.classwork.filter(work => {
                            return (work.courseId == classroom.id)
                        }).map(work => work.title)
                        return(
                            <AccordionPanel label={classroom.name}>
                                <List
                                    data={currentClasswork}
                                    pad={{ left: 'small', right: 'none' }}
                                    action={(item, index) => (
                                    <Menu
                                        key={index}
                                        icon={<More />}
                                        hoverIndicator
                                        items={[{ label: 'one' }]}
                                    />
                                    )}
                                />
                            </AccordionPanel>
                        )
                    })
                    }
                    
                </Accordion>
            </div>
        );
    }
}
 
export default ClassworkPage;