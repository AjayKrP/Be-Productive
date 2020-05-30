import React from 'react';

export default class DueDate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dueDate: new Date()
        }
        this.changeDueDate = this.changeDueDate.bind(this);
    }
    changeDueDate(e) {
        var ToDay = new Date();
        var value = e.target.value;
        console.log(ToDay)
        console.log(value)
        if (new Date(value).getTime() >= ToDay.getTime()) {
            this.props.dueDateCallbackFromParent(value); // Send data to parent
            this.setState({
                dueDate: value
            })
        }
        else {
            alert('Due date can\'t less than current date!')
            return false;
        }
    }

    render() {
        return (
            <input
                type="date"
                className="form-control"
                id="due_date"
                onChange={this.changeDueDate}
            />
        );
    }
}