import React from 'react';
import {Link} from "react-router-dom";

export default class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to={"/"}>Be Productive</Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link  to={'/add'}>
                                <span className="glyphicon glyphicon-plus"></span>
                                Add Task
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}