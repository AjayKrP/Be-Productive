import React from 'react';

export default class Input extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            description: ''
        }
        this.changeTask = this.changeTask.bind(this);
    }

    changeTask(e) {
        var taskName = e.target.value;
        if (taskName !== "") {
            this.props.descriptionCallbackFromParent(taskName);
            this.setState({
                description: taskName
            })
        }
    }

    render() {
        return (
            <div className="form-group">
                <input
                    autoFocus={true}
                    type="text"
                    onChange={this.changeTask}
                    placeholder={'Enter task name'}
                    className="form-control"
                    id="task_name"
                    required={true}
                />
            </div>
        );
    }
}