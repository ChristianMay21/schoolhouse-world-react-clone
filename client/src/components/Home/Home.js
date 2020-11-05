import React from 'react';
import styles from './Home.css';
import earth from "./earth-planet.svg"



class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="Home">
                <img className="Home-logo" src={earth} />
                <div className="Home-text">schoolhouse.world</div>
            </div>
    }
}

export default Home;