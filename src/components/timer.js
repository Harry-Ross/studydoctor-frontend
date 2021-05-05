import React, { Component } from 'react';
import { Button } from 'grommet'

class Timer extends Component {
    constructor(props) {
        super(props)
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
    }
    state = { 
        time: 25*60,
        started: false
    }
    startTimer() {
        if (!this.state.started) {
            this.timer = setInterval(() => this.setState({
                time: this.state.time - 1
            }), 1000)
            this.setState({
                started: true
            })
        } else {
            clearInterval(this.timer)
            this.setState({
                started: false
            })
        }
    }

    stopTimer() {
        this.setState({
            time: 25*60
        })
        clearInterval(this.timer)
        this.setState({
            started: false
        })
    }
    render() { 
        return ( 
            <div>
                <h1>{Math.floor(this.state.time/60)}:{('0' + (this.state.time-(Math.floor(this.state.time/60)*60)) ).slice(-2)}</h1>
                <Button primary label={!this.state.started ? "Start" : "Stop"} onClick={this.startTimer} />
                <Button secondary label="Reset" onClick={this.stopTimer} />
            </div>
        );
    }
}
 
export default Timer;