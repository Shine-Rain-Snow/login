//Login component

import React from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUser } from './actions';
import './Login.scss';

class LoginPage extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
   
        this.props.loginUser(user);
    }

    componentDidMount() {
        console.log('this is login data'+ JSON.stringify(this.props.loginData));
        if(this.props.loginData.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.loginData.isAuthenticated) {
            this.props.history.push('/');
        }
        if(nextProps.loginData) {
            console.log(nextProps.loginData)
            this.setState({
                errors: nextProps.loginData,
            })
        }
    }


    render() {
        const {errors} = this.state;
        return(
            <div>
                <form className="form-signin" >
                    <h1 className="h3 mb-3 font-weight-100">Welcome Game</h1>
                   
                    <input 
                        name="email"
                        type="email" 
                        id="inputEmail" 
                        className={classnames('form-control', {
                            'is-invalid': errors.email
                        })} 
                        placeholder="Email address" 
                        required autoFocus
                        onChange={this.handleInputChange}
                        value={this.state.email} />
                        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                    
                    <input 
                        name="password"
                        type="password" 
                        id="inputPassword" 
                        className={classnames('form-control', {
                            'is-invalid': errors.password
                        })} 
                        onChange={this.handleInputChange}
                        value={this.state.password}
                        placeholder="Password" required />
                        {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                    <div className="checkbox mb-3">
                        <Link to="/register">
                            New SignUp? 
                        </Link>
                    </div>
                    <button 
                        className="btn btn-lg btn-primary btn-block" 
                        type="submit"
                        onClick={this.handleSubmit}>Sign in</button>
                </form>
            </div>
            
        );
    }
}

LoginPage.propTypes = {
    loginData: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    loginData: state.loginData,    
})

export default connect(mapStateToProps, {loginUser})(LoginPage);