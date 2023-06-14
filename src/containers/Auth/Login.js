import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginService } from '../../services/userService';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state= {
            username: '',
            password: '',
        }
    }
    handleOnChangeInputName = (event) => {
        this.setState({
            username: event.target.value
        })
        // console.log(event.target.value);
    }

    handleOnChangeInputPass = (event) => {
        this.setState({
            password: event.target.value
        })
        // console.log(event.target.value);
    }

    handleLogin = async () => {
        
        await handleLoginService(this.state.username, this.state.password)
            .then(response => {
                console.log(response.data);
                
            })
            .catch(error => {
                console.log(error);
            });

        // console.log('username: ' ,this.state.username , 'password: ' , this.state.password)
        // console.log(this.state)
    }

    render() {
        return (
            <div>
                <div className='login-background'>
                    <div className='login-container'>
                        <div className='login-content row'>
                            <div className='col-12 login-text'>Login</div>
                            <div className='col-12 form-group login-input'>
                                <label className='input'>Username: </label>
                                <input type='text' value={this.state.username}
                                onChange={(event) => this.handleOnChangeInputName(event)}
                                placeholder='Enter your name' className='form-control login-input'/>
                            </div>
                            <div className='col-12 form-group login-input'>
                                <label className='input'>Password: </label>
                                
                                <input type='password' value={this.state.password} 
                                onChange={(event) => this.handleOnChangeInputPass(event)}
                                placeholder='Enter your password' className='form-control login-input'/>
                            </div>
                            <div className='col-12 login-btn'>
                                <button type='button' className='btn-login' onClick={()=> {this.handleLogin()}}>Login</button>
                            </div>
                            <div className='col-12 forgot-password'>
                                <span >Forgot your password?</span>
                            </div>
                            <div className='col-12 orther-login'>
                                <span className=''>Or sign in with </span>
                            </div>
                            <div className='col-12 social-login'>
                                
                                <i className="fab fa-facebook" style={{color: "#1259d3"}}></i>
                                <i className="fab fa-google-plus-g" style={{color: "#b60c0c"}}></i>
                                <i className="fab fa-twitter" style={{color: "#00b8e6"}}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
