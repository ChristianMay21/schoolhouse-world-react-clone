import React from 'react';
import styles from './Recorder.css';
import $ from 'jquery'

let blobs, blob, recorder, stream, voiceStream, screenStream;



class Recorder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 'prerecord'
        }
    }

    startRecording = async () => {
        if(this.props.start) {
            this.props.start()
        }
        screenStream = await navigator.mediaDevices.getDisplayMedia({
            video: { mediaSource: "screen" },
            audio: false
        });

        voiceStream = await navigator.mediaDevices.getUserMedia({
            video: false,
            audio: true
        })

        let tracks = [...screenStream.getTracks(), ...voiceStream.getTracks()]

        stream = new MediaStream(tracks)

        blobs = []
        recorder = new MediaRecorder(stream, { mimeType: 'video/webm' })

        recorder.ondataavailable = e => blobs.push(e.data);

        recorder.onstop = async (e) => {
            blob = new Blob(blobs, { type: blobs[0].type })
            const route = 'http://localhost:9000/tutorCert'

            var file = new File([blob], "myVideo", { type: 'video/webm; codecs=webm' })
            var formData = new FormData();
            formData.append('fname', 'upload.webm')
            formData.append('data', blob)
            console.log('about to send ajax request')
            $.ajax({
                type: 'POST',
                url: route,
                crossDomain: true,
                data: formData,
                processData: false,
                contentType: false
            }).done(function (data) {
                console.log("data", data)
            })
        }
        recorder.start();
    }

    stopRecording = () => {
        recorder.stop()
        stream.getTracks().forEach(s => s.stop())
        stream = null;
        if(this.props.stop) {
            this.props.stop()
        }
    }

    handleClick = () => {
        this.setState((prevState, props) => {
            switch(prevState.step) {
                case "prerecord":
                    return {step: "pretest"}
                case "pretest":
                    return {step: "test"}
                case "test":
                    return {step: "posttest"}
                case "posttest":
                    return {step: "peerreview"}
                default:
                    break;
            }
        }, () => {
            switch(this.state.step) {
                case "pretest":
                    this.startRecording()
                    break;
                case "test":
                    this.props.launchTest();
                    break;
                case "posttest":
                    this.stopRecording()
                    break;
                case "peerreview":
                    break;
                default:
                    this.props.peerReview()
                    break;
            }
        })

    }

    getButtonText = () => {
        let buttonText = {
            "prerecord": "Start Recording",
            "pretest": "Start Test",
            "test": "Submit Test",
            "posttest": "Peer Review",
            "peerreview": "Peer Review is not implemented yet!"
        }
        return buttonText[this.state.step]
    }

    render() {
        return <div className="Recorder">
            <div className="take-test-container" onClick={this.takeTest}>
                <div onClick={this.handleClick}>
                    <span className="test take-test">{this.getButtonText()}</span>
                </div>
            </div>
        </div>
    }
}

export default Recorder;