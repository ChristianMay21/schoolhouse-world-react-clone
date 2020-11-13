import React from 'react';
import styles from './Recorder.css';
import $ from 'jquery'

let blobs, blob, recorder, stream, voiceStream, screenStream;



class Recorder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videoRecording: false
        }
    }

    startRecording = async () => {
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
    }

    handleRecording = () => {
        this.setState((prevState, props) => ({ recording: !prevState.recording }),
            () => {
                if (this.state.recording === true) {
                    this.startRecording()
                } else {
                    this.stopRecording()
                }
            })
    }

    

    render() {
        return <div className="Recorder">
            <button onClick={this.handleRecording}>{this.state.recording ? "Stop Recording" : "Start Recording"}</button>
        </div>
    }
}

export default Recorder;