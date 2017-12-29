import React, { Component } from 'react';
import Time from '../containers/time';
import Example from './hamburger';
import './video.css'

class Video extends Component {
    
    render(){
    return (
        <div className='video'>
            <header className="v-header container">
                <div className="fullscreen-video-wrap">
                    <video id="background-video" loop autoPlay muted>
                        <source src="https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/1807/6/159035843/497632384.mp4?token=1514004250-0xc1a4df93e8ec7d00bf3926e7fd4a85097d516376" type="video/mp4" />
                        <source src={require('./NEKOPARA.mp4')} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="header-overlay">
                    <Example />
                </div>
                <div className="header-content text-md-center">
                    <h1>Welcome user</h1>
                    <p>Using React for a front end experience, please browse my personal wares, enjoy your stay!</p>
                    <a className="btn" >Find Out More</a>
                    <Time />
                </div>
            </header>
        </div>
    )
}
};
export default Video;