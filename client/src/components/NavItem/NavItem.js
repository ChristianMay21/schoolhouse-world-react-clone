import React from 'react';
import styles from './NavItem.css';

class NavItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className={`nav-item-container  ${this.props.active ? "active" : ""}`}>
                <div className={`NavItem`}>{this.props.text}</div>
            </div>
    }
}

export default NavItem;