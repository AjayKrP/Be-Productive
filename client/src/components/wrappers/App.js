import React, {Component} from 'react';
import { Switch } from 'react-router';
import {Navbar, Home, Page404, Add} from "../ui";
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            status: 'New',
            label: 'Personal',
            dueDate: new Date()
        }
    }

    callbackSetDescriptionParent = (descriptionFromChild) => {
        console.log(descriptionFromChild);
        this.setState({
            description: descriptionFromChild
        })
    }

    callbackSetStatusParent = (statusFromChild) => {
        console.log(statusFromChild)
        this.setState({
            status: statusFromChild
        })
    }

    callbackSetLabelParent = (labelFromChild) => {
        console.log(labelFromChild)
        this.setState({
            label: labelFromChild
        })
    }

    callbackSetDueDateParent = (dueDateFromChild) => {
        console.log(dueDateFromChild)
        this.setState({
            dueDate: dueDateFromChild
        })
    }

    render() {
        const callBackFunctions = [
            this.callbackSetDescriptionParent,
            this.callbackSetStatusParent,
            this.callbackSetLabelParent,
            this.callbackSetDueDateParent,
        ];

        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Navbar />
                        <Switch>
                            <Route exact path="/">
                                <Home data={callBackFunctions}>
                                    {this.state}
                                </Home>
                            </Route>
                            <Route exact path={'/add'}>
                                <Add data={callBackFunctions}>
                                    {this.state}
                                </Add>
                            </Route>
                            <Route exact>
                                <Page404/>
                            </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
