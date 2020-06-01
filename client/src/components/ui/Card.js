import React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    async deleteTask(id) {
        await fetch('http://localhost:8080/api/tasks/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(json => json).then(json => {
            if (json.status === 200) {
                this.props.callbackDeleteTaskParent(id);
            }
        })
    }

    async markAsDone(id) {
        await fetch('http://localhost:8080/api/tasks/done/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(json => json).then(json => {
            console.log(json)
            if (json.status === 200) {
                this.props.callbackMarkTaskAsDoneParent(id);
            }
        })
    }

    render() {
        return(
            <div title={this.props.data.taskDone ? 'This task has been done' : 'Incompleted task'} className={this.props.data.taskDone ? 'card background-green' : 'card'}>
                <div className="card-container">
                    <h4 title={'Task Description'}><b>{this.props.data.description}</b></h4>
                    <p title={'Due date'}>{new Date(this.props.data.dueDate).toDateString()}
                        <span title={'Status of the task'} className={'status'}>{this.props.data.status}</span>
                        <span title={'Label of the task'} className={'task-label'}>{this.props.data.label}</span>
                        <span className={'button-right'}>
                            <a onClick={() => this.deleteTask(this.props.data.id)} className={'trash'} href={'#'} ><i title={'Delete Task'} className="fa fa-trash-o" aria-hidden="true"/></a>
                        </span>
                        <span className={'button-right'}>
                            <a href={'#'} className={'done'} onClick={() => this.markAsDone(this.props.data.id)}><i title={'Mark as Done'} className="fa fa-check" aria-hidden="true"/></a>
                        </span>
                        <span className={'button-right'}>
                            <a className={'edit'} href={'#'}> <i title={'Edit Task'} className="fa fa-pencil-square-o" aria-hidden="true"/></a>
                        </span>
                    </p>
                </div>
            </div>
        )
    }
}
