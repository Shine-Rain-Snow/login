import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
    width: '70%',
    margin: '0 auto',
    display: 'flex',
};
class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="navbar_container" style={navStyle}>
                    <Link className="navbar-brand" to="/">Welcome</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            
        )
    }
}
export default Navbar;