import React from 'react';
import Status from "./Status";
import Label from "./Label";
import DueDate from "./DueDate";
import Input from "./Input";

export default class Add extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange() {
        var self = this;
        console.log(self.props.children)
        var response = await fetch('http://localhost:8080/api/tasks', {
            method: 'POST',
            body : JSON.stringify(self.props.children),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        console.log(response.json().then((json) => console.log(json)))
    }

    render() {
        return(
            <div className={'row'}>
                <div className={'col col-sm-6 col-sm-offset-3'}>
                    <Input descriptionCallbackFromParent={this.props.data[0]}/>
                    <div className="form-group form-inline">
                        <DueDate dueDateCallbackFromParent={this.props.data[3]}/>
                        <Status statusCallbackFromParent={this.props.data[1]}/>
                        <Label labelCallbackFromParent={this.props.data[2]}/>
                        <input
                            type="button"
                            className="form-control"
                            value={'Add'}
                            onClick={this.handleChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}