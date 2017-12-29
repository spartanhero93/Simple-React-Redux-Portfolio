import React, {Component} from 'react';

class Time extends Component {
    constructor(props){
        super(props);
        this.state= {time: new Date()}
    }
    componentDidMount() {
        this.timerId = setInterval( 
            () => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    tick() {
        this.setState({ time: new Date()})
    }

    render(){
        return (
            <div>
                <h3>Your current time is: {this.state.time.toLocaleTimeString()}</h3>
            </div>
        )
    }
}
export default Time;