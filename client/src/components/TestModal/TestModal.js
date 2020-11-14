import React from 'react';
import styles from './TestModal.css';
import CourseDivider from '../CourseDivider/CourseDivider'
import VerticalSpacer from '../VerticalSpacer/VerticalSpacer'
import CheckboxInstruction from '../CheckboxInstruction/CheckboxInstruction'
import Recorder from '../Recorder/Recorder'

class TestModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            peerReview: false
        }
    }

    stopPropagation = (event) => {
        event.stopPropagation()
    }

    takeTest = () => {
        window.open(this.props.url)
    }

    peerReview = () => {
        this.setState((prevState, props) => ({
            peerReview: true
        }))
    }

    render() {
        return <div className="TestModal" onClick={this.props.killswitch}>
            <div className="modal-body" onClick={this.stopPropagation}>
                <VerticalSpacer height="40px" />
                <h2>{this.props.lesson}</h2>
                <CourseDivider />
                <h3>What to expect</h3>
                <p>You will be led through step-by-step instructions on how to properly record and submit your video submission. Please follow these instructions closely, otherwise your submission may be rendered invalid and you will be required to submit again.</p>
                <p className="warning"><strong>Attempts to game this system will result in a live audit</strong> during which an expert review panel will asses your content mastery through live questioning. Confirmed incidents of cheating will be reported to institutions who request your transcript.</p>
                <VerticalSpacer height="15px" />
                <CourseDivider />
                <h3>Technical setup</h3>
                <VerticalSpacer height="5px" />
                <p>If you haven't already, please be sure to <a href="">sign up</a> for certification.</p>
                <VerticalSpacer height="15px" />
                <CourseDivider />
                <h3>Prepare your space</h3>

                <CheckboxInstruction boldText="Shut down all electronics " text="other than your computer/recording device, including phones. Calculators are permitted for test questions that explicitly recommend them." />
                <CheckboxInstruction boldText="Remove prohibited items " text="including:" subinstructions={["Headphones/earbuds", "Anything that unnecessarily covers your face (sunglasses, etc.)"]} />
                <CheckboxInstruction boldText="If possible, prepare a quiet environment " text="without any distractions or people in the room." />
                <CheckboxInstruction boldText="Prepare a pencil/pen and paper" text=", if you'd like to use them." />
                <CheckboxInstruction boldText="Test your microphone and webcam." text="If you do not have a webcam, please contact certifications@schoolhouse.world so we can help you find an alternative." />
                <CheckboxInstruction boldText="Start the screen recorder by using the 'Start Recording' button, and record the screen that this tab is open on." text="" />
                <VerticalSpacer height="40px" />
                <CourseDivider />
                <VerticalSpacer height="20px" />
                <Recorder launchTest={this.takeTest} peerReview={this.peerReview} />
                <VerticalSpacer height="20px" />
            </div>
        </div>
    }
}

export default TestModal;