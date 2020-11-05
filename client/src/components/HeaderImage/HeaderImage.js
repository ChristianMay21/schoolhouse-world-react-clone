import React from 'react';
import styles from './HeaderImage.css';

class HeaderImage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.page === "tutor-certification") {
            console.log("returning header")
            return <div className="HeaderImage" style={{ backgroundImage: "url(images/blackboard.png)" }}>
                <div className="banner-contents">
                    <img className="banner-icon" src="/images/tutoring.png" />
                    <div className="banner-text-container">
                        <div className="banner-text">
                            <h1 className="banner-text-main">Tutoring Certification</h1>
                            <div className="banner-subtext">Prove your subject readiness to tutor</div>
                        </div>
                    </div>
                </div>
                <div className="corner-box">
                    <a href="https://coda.io/@schoolhouse/welcome/">
                        <img alt="schoolhouse.world"className="corner-img schoolhouse" src="images/schoolhouse.png" />
                    </a>
                    <a href="https://www.uchicago.edu/">
                        <img alt="University of Chicago" className="corner-img uchicago" src="images/uchicago.svg" href="" />
                    </a>
                    <a href="https://www.loom.com/">
                        <img alt="Loom.com"className="corner-img loom" src="images/loom.png" />
                    </a>
                </div>
            </div>
        }

    }
}

export default HeaderImage;