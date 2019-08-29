import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from 'containers/LoginPage/actions';

const navStyle = {
    width: '70%',
    margin: '0 auto',
    display: 'flex',
};
class Navbar extends Component {

	onLogout(e) {
		e.preventDefault();
		this.props.logoutUser(this.props.history);
	}

    render() {
    	const { isAuthenticated, user } = this.props.auth;
    	const authLinks = (
    		<ul className="navbar-nav ml-auto">
    			<a href="#" className="nav-link" onClick={this.onLogout.bind(this)}>
    				<span alt={user.name} title={user.name}
    					className="rounded-circle" 
    					style={{width: '25px', marginRight: '5px'}}>
                        {user.name}
                    </span>
    				Logout
    			</a>
    		</ul>

    	)
    	const guestLinks = (
    		<ul className="navbar-nav ml-auto">
    			<li className="nav-item">
    				<Link className="nav-link" to="/register">Sign Up</Link>
    			</li>
    			<li className="nav-item">
    				<Link className="nav-link" to="/login">Sign In</Link>
    			</li>
    		</ul>
    	)
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="navbar_container" style={navStyle}>
                    <Link className="navbar-brand" to="/">Welcome</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        { isAuthenticated ? authLinks : guestLinks }
                    </div>
                </div>
            </nav>
            
            
        )
    }
}

Navbar.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateProps = (state) => ({
	auth: state.loginData
})

export default connect(mapStateProps, {logoutUser})(withRouter(Navbar));