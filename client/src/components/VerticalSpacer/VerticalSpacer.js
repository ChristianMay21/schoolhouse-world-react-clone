import React from 'react';
import styles from './VerticalSpacer.css';

class VerticalSpacer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.height+"px")
        return <div className="VerticalSpacer" style={{height: this.props.height}}></div>
    }
}

export default VerticalSpacer;