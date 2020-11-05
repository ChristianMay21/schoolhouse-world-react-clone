import React from 'react';
import styles from './PageBody.css';
import VerticalSpacer from '../VerticalSpacer/VerticalSpacer'
import TutorCertification from '../pages/TutorCertification/TutorCertification'

class PageBody extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.page === "tutor-certification") {
            return <div className="PageBody">
                <TutorCertification />
            </div>
        }
    }
}

export default PageBody;