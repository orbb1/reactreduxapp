import React, { Component } from 'react';
import { RouteTransition } from 'react-router-transition';

import './About.scss';

class About extends Component {
    render() {
        return (
            <RouteTransition
                pathname={location.pathname}
                atEnter={{ translateX: 100 }}
                atLeave={{ translateX: -100 }}
                atActive={{ translateX: 0 }}
                mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}>
                <div className="About-Container container">
                    <h4>This is my simple todo app</h4>
                    <p>I made this page for practising React and Redux</p>
                    <hr />
                    <p>Link to <a href="https://github.com/orbb1/reactreduxapp">GitHub repo</a></p>
                </div>
            </RouteTransition>
        )
    }
}

export default About;