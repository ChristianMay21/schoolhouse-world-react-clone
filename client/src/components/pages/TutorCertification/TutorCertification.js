import React from 'react';
import styles from './TutorCertification.css';
import VerticalSpacer from '../../VerticalSpacer/VerticalSpacer'
import Recorder from '../../Recorder/Recorder'
import TutorCertTypeform from '../../TutorCertTypeform/TutorCertTypeform'
import Course from '../../Course/Course'
import CourseDivider from '../../CourseDivider/CourseDivider'

class TutorCertification extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signup_part: 1
        }
    }

    render() {
        return <div className="TutorCertification">
            <div className="PageBody">
                <div className="page-content-grid-container">
                    <div className="page-content">
                        <VerticalSpacer height="63px" />
                        <p>Schoolhouse.world certification provides an easy way to showcase your mastery in core math topics so that we know you are ready to tutor the topic.
                        Build a tutor profile that shows what you're ready to teach. We will also soon be adding your reputation and track record as a tutor. This will
                        be used by students choosing group tutoring sessions. We also hope to connect highly regarded tutors with opportunities in college and industry.
                        </p>
                        <VerticalSpacer height="32px" />
                        <img className="flowchart" src="images/tutoring-flowchart.png" />
                        <VerticalSpacer height="40px" />
                        <h2>How it works</h2>
                        <ol>
                            <li><strong>Choose a Khan Academy Unit</strong> to become a certified tutor in. We currently provide tutor certification in calculus and statistics (more subjects coming soon). If you need help preparing, sign up <a href="https://coda.io/@schoolhouse/welcome/sign-up-for-free-tutoring-70">here</a> for free tutoring.</li>
                            <li><strong>Achieve at least a 90%</strong> on the unit test while explaining your reasoning out loud. You will record a video to verify that it was you who did the work and submit this for review. You are allowed to take the test as many times as you want until you master it.</li>
                            <li><strong>Peer review two videos</strong> from students around the world who are trying to get tutor certification in the same unit.</li>
                        </ol>
                        <p>That's all! Once your video has been reviewed, you'll get an email with a <strong>publicly shareable link</strong> to your schoolhouse.world tutor profile,
                            which can be shared with potential students. Over time, this profile will also have evidence of the contributions you've made to the community as a tutor.
                            In the future, we hope to connect highly reputed tutors with opportunities in higher education, scholarships and internships. Build your profile even further
                            (and help students from around the world), by applying to tutor the topics you have mastered <a href="https://coda.io/@schoolhouse/welcome/tutor-sign-up-72">here</a>.
                        </p>
                        <h2>Part 1: Sign Up</h2>
                        <p>Please sign up as soon as possible using the Typeform below.</p>
                        <TutorCertTypeform />
                        <VerticalSpacer height="55px" />
                        <h2>Part 2: Prove your Knowledge</h2>
                        <p>Select a course you'd like to become a certified tutor in. Then Select <em>Practice</em> to review the content on a unit test, and <em>Start</em> when you're ready to give it a try. Remember, you can retry the test as many times as you'd like.</p>
                        <p><strong>Need some extra help preparing? Sign up for free, small-group tutoring <a href="https://coda.io/@schoolhouse/welcome/sign-up-for-free-tutoring-70">here</a></strong></p>
                        <CourseDivider />
                        <Course topic="Calculus" />
                        <CourseDivider />
                        <Course topic="Statistics" />
                        <CourseDivider />
                        <VerticalSpacer height="40px" />
                        <p><strong>Any questions?</strong> See our <a href="https://coda.io/@schoolhouse/welcome/certification-faqs-101">FAQs</a>, or email us at <a href="mailto:certifications@schoolhouse.world">certifications@schoolhouse.world</a> and we'll get back to you shortly.</p>
                        <VerticalSpacer height="180px"/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default TutorCertification;