import React from 'react';
import styles from './Course.css';
import courseLib from './Courselib.json'
import {Accordion, Card} from 'reactstrap'




let lessonNum = 0


class Course extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        }
    }

    toggleExpanded = () => {
        this.setState((prevState, props) => ({
            expanded: !prevState.expanded
        }))
        lessonNum = 0
    }

    getLessonNum = () => {
        lessonNum++;
        return lessonNum;
    }

    render() {
        return <div className="Course">
            <div className="course-header" onClick={this.toggleExpanded}>
                <img className="course-icon" src={`images/${this.props.topic.toLowerCase()}.svg`} />
                <div className="course-title">{this.props.topic}</div>
            </div>
            {this.state.expanded &&
                <div className="course-content">
                    {Object.keys(courseLib[this.props.topic]).map((lesson) =>
                        <div className="lesson">
                            <div className="lesson-num-container">
                                <div className="lesson-num">{this.getLessonNum()}</div>
                            </div>
                            <div className="lesson-subcontainer">
                                <div className="lesson-name-container">
                                    <div className="lesson-name">{lesson.includes("Course Challenge -") ? <div><strong>Course Challenge -</strong>{lesson.replace("Course Challenge -", "")}</div> : <div>{lesson}</div>}</div>
                                </div>
                                <div className="practice-container">
                                    <a href={courseLib[this.props.topic][lesson].test} target="_blank" >
                                        <span className="practice lesson-btn" >Practice</span>
                                    </a>
                                </div>
                                <div className="start-container">
                                    <span className="start lesson-btn">Start</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>}

        </div>
    }
}

export default Course;