import React, { Component } from 'react';

 class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {score: 0}

        this.userAdds = this.userAdds.bind(this)
        this.userSubtracts = this.userSubtracts.bind(this)
    }
    userAdds() {
        this.setState ({ score: this.state.score + 1});
    }
    userSubtracts() {
        this.setState ({ score: this.state.score - 1 });
    }

    

    render() {
        return(
            <div className='box'>
                <p>Total Count: {this.state.score}</p>
                <button className='button' onClick={this.userAdds}>ADD</button>
                <button className='button' onClick={this.userSubtracts}>DEC</button>
            </div>
        )
    }
}
export default Counter