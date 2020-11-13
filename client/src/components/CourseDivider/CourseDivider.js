import React from 'react';
import styles from './CourseDivider.css';

class CourseDivider extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="CourseDivider">
            <div className="top-course-divider"></div>
            <div className="bottom-course-divider"></div>
        </div>
    }
}

export default CourseDivider;