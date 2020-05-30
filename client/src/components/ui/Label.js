import React from 'react';

export default class Label extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            label: 'Personal'
        }
    }

    changeLabel(value) {
        this.props.labelCallbackFromParent(value);
        this.setState({
            label: value
        })
    }

    render() {
        return (
            <select
                className="form-control"
                id="label"
                onChange={e => this.changeLabel(e.target.value)}
            >
                <option>Personal</option>
                <option>Work</option>
                <option>Office</option>
                <option>Shopping</option>
                <option>Other</option>
            </select>
        )
    }
}