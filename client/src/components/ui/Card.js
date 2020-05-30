import React from 'react';

export default class Card extends React.Component {
    render() {
        return(
            <div className="card">
                <div className="card-container">
                    <h4 title={'Task Description'}><b>{this.props.data.description}</b></h4>
                    <p title={'Due date'}>{new Date(this.props.data.dueDate).toDateString()}
                        <span title={'Status of the task'} className={'status'}>{this.props.data.status}</span>
                        <span title={'Label of the task'} className={'task-label'}>{this.props.data.label}</span>
                        <span className={'button-right'}>
                            <a className={'trash'} href={'#'} ><i title={'Delete Task'} className="fa fa-trash-o" aria-hidden="true"/></a>
                        </span>
                        <span className={'button-right'}>
                            <a className={'done'} href={'#'}><i title={'Mark as Done'} className="fa fa-check" aria-hidden="true"/></a>
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