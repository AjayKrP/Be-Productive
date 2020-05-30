import React from 'react';
import Status from "./Status";
import Label from "./Label";

export default class Filter extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-inline">
                <div className="form-group">
                    <label htmlFor="email">Status</label>
                    <Status statusCallbackFromParent={this.props.func.data[1]}/>
                </div>
                <div className="form-group" >
                    <label htmlFor="pwd">Label</label>
                    <Label labelCallbackFromParent={this.props.func.data[2]}/>
                </div>
            </div>
        )
    }
}