import React from 'react';

export default class Status extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            status: 'New'
        }
    }

    /**
     * Using this function for [filter by status] purpose
     * @returns {string|{defaultValue: string, values: [string, string, string], type: *}|string|"rejected"|number|"fulfilled"|"rejected"|"fulfilled"}
     */
    // TODO
    getCurrentStateValue = () => {
        return this.state.status;
    }

    changeStatus(value) {
        this.props.statusCallbackFromParent(value);
        this.setState({
            status : value
        })

    }

    render() {
        return (
            <select
                className="form-control"
                id="status"
                onChange={e => this.changeStatus(e.target.value)}
            >
                <option>New</option>
                <option>In Progress</option>
                <option>Completed</option>
            </select>
        )
    }
}