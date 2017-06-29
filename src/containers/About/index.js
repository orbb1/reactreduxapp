import React, {Component} from 'react';

import './About.scss';

class About extends Component {
    render() {
        return (
            <div className="About-Container container">
                <h4>This is my simple todo app</h4>
                <p>I made this page for practising React and Redux</p>
                <hr/>
                <p>Link to <a href="https://github.com/orbb1/reactreduxapp">GitHub repo</a></p>
            </div>
        )
    }
}

export default About;