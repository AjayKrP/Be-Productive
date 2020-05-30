import React from 'react';
import Card from "./Card";
import Filter from "./Filter";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            items: []
        }
    }

    fetchRecord = async () => {
        return await fetch('http://localhost:8080/api/tasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }

    async componentDidMount() {
        var self = this;
        this.fetchRecord().then(resp => {
            resp.json().then((json) => {
                self.setState({
                    tasks : json,
                    items: json
                })
            })
        })
    }

    /*getDerivedStateFromProps(props, state) {
        console.log('updated')
    }*/


    componentDidUpdate(prevProps) {
        var self = this;
        var status = this.props.children.status;
        var label = this.props.children.label;

        // TODO add filter by date also
        var filter = {
            status: status,
            label: label
        }

        if (this.props.children !== prevProps.children) {
            /*this.fetchRecord().then(resp => {
                resp.json().then((json) => {*/
                    var newTasks = this.state.items.filter(function (task) {
                        for (var key in filter) {
                            if (task[key] === undefined || task[key] !== filter[key])
                                return false;
                        }
                        return true;
                    })
                    self.setState({
                        tasks: newTasks
                    })
                //})
            //})
        }
    }

    render() {
        return(
            <div>
                <div className={'col-sm-6 col-sm-offset-3'}>
                    {this.state.tasks.map((task, index) =>
                        <Card key={index} data={task}/>
                    )}
                    <Filter func={this.props}/>
                </div>
            </div>
        )
    }
}
