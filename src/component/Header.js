import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import logo from "../logo.svg";

class Header extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                   {/* <Link className="navbar-brand" to="/">
                        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>SwiftPro</Link>*/}
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active">
                                <div><Link className="nav-link" to="/">Films <span className="sr-only">(current)</span></Link></div>
                            </li>
                            <li className="nav-item">
                                <div><Link className="nav-link" to="/marker">Marker</Link></div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;