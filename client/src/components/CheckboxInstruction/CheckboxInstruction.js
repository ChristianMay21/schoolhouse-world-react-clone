import React from 'react';
import styles from './CheckboxInstruction.css';

class CheckboxInstruction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    handleInputChange = () => {
        console.log('handling input change')
        this.setState((prevState, props) => ({checked: !prevState.checked}))
    }

    render() {
        return <div className="CheckboxInstruction">
            <form style={this.state.checked ? {"text-decoration": "line-through", "opacity": 0.5} : null}>
                <div>
                <input type="checkbox" checked={this.state.checked} onChange={this.handleInputChange} id={this.props.boldText}/>
                <label htmlFor={this.props.boldText}><strong>{this.props.boldText}</strong>{this.props.text}</label>
                {this.props.subinstructions && <ul>
                    {this.props.subinstructions.map((subinstruction) => (
                        <li>{subinstruction}</li>
                    ))}
                </ul>
                }
                </div>
            </form>
        </div>
    }
}

export default CheckboxInstruction;