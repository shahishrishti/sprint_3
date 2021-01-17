//import statement

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/landing.css';

//Class Component

class LandingComponent extends React.Component {
    render() {
        return <div>
            <div id="landing">
                <div id="content">
                    <p id="quote">TAKE ONLY MEMORIES, LEAVE ONLY FOOTPRINTS</p>
                    <p id="statement">Start creating new memories with us...</p>
                    <div className="btn-block">
                        <button><Link to="/admin" class="link">ADMIN</Link></button>
                        <button><Link to="/user" class="link">USER</Link></button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default LandingComponent;