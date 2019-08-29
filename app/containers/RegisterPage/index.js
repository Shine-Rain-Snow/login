//Login component

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { registerUser } from 'containers/RegisterPage/actions';
import { makeSelectUserData } from 'containers/App/selectors';
import './Register.scss';

export class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goToLogin = this.goToLogin.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    goToLogin() {
        this.props.history.push('/login');     
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email:this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }

        this.props.registerUser(user, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/');
        }
        if(nextProps.register) {
            this.setState({
                errors: nextProps.register
            });
        }
    }

    componentDidMount() {
        
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
              <form className="form-signUp" role="form" >
                <div className="text-center mb-4">
                    <h1>Create your account!</h1>
                </div>
                <div className="form-label-group">
                    {/* <label htmlFor="inputUserName">Username</label> */}
                    <input 
                        name="name"
                        type="text" 
                        id="inputUserName" 
                        className={classnames('form-control', {'is-invalid': errors.name})} 
                        placeholder="Username" 
                        value={this.state.name}
                        onChange={this.handleChange} />
                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                </div>
                <div className="form-label-group">
                    {/* <label htmlFor="inputEmail">Email address</label> */}
                    <input 
                        name="email"
                        type="email" 
                        id="inputEmail" 
                        className={classnames('form-control', {
                            'is-invalid': errors.email
                        })} 
                        placeholder="Email address" required autoFocus
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </div>
                <div className="form-label-group">
                    {/* <label htmlFor="inputPassword">Password</label> */}
                    <input
                        name="password" 
                        type="password" 
                        id="inputPassword" 
                        className={classnames('form-control', {
                            'is-invalid': errors.password
                        })} 
                        placeholder="Password" required
                        value={this.state.password}
                        onChange={this.handleChange}
                        />
                        {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                <div className="form-label-group">
                    {/* <label htmlFor="inputPasswordConfirm">Password confirm</label> */}
                    <input 
                        name="password_confirm"
                        type="password" 
                        id="inputPasswordConfirm" 
                        className={classnames('form-control', {
                            'is-invalid': errors.password_confirm
                        })}
                        placeholder="Confirm password" required 
                        value={this.state.confirmPass}
                        onChange={this.handleChange}
                        />
                        {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
                </div>
                <div className="btn-login-group">
                    <button className="btn btn-md btn-primary" type="button" onClick={this.goToLogin}>Login</button>
                    <button className="btn btn-md btn-success" type="button" onClick={this.handleSubmit}>Register</button>
                </div>
              </form>
            </div>
        );
    }
}

RegisterPage.propTypes = {
    registerUser: PropTypes.func,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    register: state.register,
    auth: state.loginData,
});

export default connect(mapStateToProps, {registerUser})(withRouter(RegisterPage));
