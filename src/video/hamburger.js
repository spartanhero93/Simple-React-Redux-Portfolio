import React from 'react';
import './hamburgers.css'

class Example extends React.Component {
    state = {
        active: false
    }
    showSettings(event) {
        event.preventDefault();
    }
    toggleBurger = () => {
        this.setState({active: !this.state.active})
    }
    render() {
        return (
            <button 
                className={`hamburger ${this.state.active && "hamburger--vortex"}`} 
                type="button" 
                onClick={this.toggleBurger}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        )

    }
}

export default Example;