import React from 'react';
import styles from './Nav.css';
import Home from '../Home/Home'
import NavItem from '../NavItem/NavItem'
class Nav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="Nav">
            <Home/>
            <NavItem text="Welcome"/>
            <NavItem text="About"/>
            <NavItem text="Sign up for free tutoring"/>
            <NavItem text="Tutor certification" active={true}/>
            <NavItem text="Sign up to tutor"/>
            <NavItem text="More"/>
        </div>
    }
}

export default Nav;