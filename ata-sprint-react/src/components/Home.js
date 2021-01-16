import React from 'react';
import '../css/landing.css';
class LandingComponent extends React.Component {
    render() {
        return <div>
            <div id="landing">
                <div id="content">
                    <p id="quote">TAKE ONLY MEMORIES, LEAVE ONLY FOOTPRINTS</p>
                    <p id="statement">Start creating new memories with us</p>
                    <div className="btn-block">
                        <button>ADMIN</button>
                        <button>USER</button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default LandingComponent;