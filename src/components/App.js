import React, { Component } from 'react';
import Video from '../video/videoBackground';
import Counter from '../containers/counter';
import TodoRedux from './TodoRedux'

import '../App.css'

export default class App extends Component {
    render() {
        return <div>
            <Video />
            <div className="container">
              <Counter className="box a" />
              <TodoRedux className="box"/>
            </div>
          </div>;
    }
}

