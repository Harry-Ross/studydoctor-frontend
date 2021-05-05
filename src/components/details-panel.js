import React, { Component } from 'react';

class DetailsPanel extends Component {
    state = {  }
    render() { 
        let { title, description, dueDate, classroomTask, uuid} = this.props.details;
        return ( 
            <div className="todo-details">
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{dueDate}</p>
                <p>{classroomTask}</p>
                <p>{uuid}</p>
            </div> 
        );
    }
}
 
export default DetailsPanel;