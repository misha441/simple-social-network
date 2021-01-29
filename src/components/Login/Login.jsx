import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import styles from './Login.module.css';
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const maxLength40 = maxLengthCreator(40)

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={styles.loginInputWrapper}>
            <Field component={Input} validate={[required,maxLength40]} name={'email'} placeholder={'email'}/>
        </div>
        <div className={styles.loginInputWrapper}>
            <Field component={Input} validate={[required,maxLength40]} name={'password'}
                   placeholder={'password'} type={'password'}/>
        </div>
        <div>
            <Field component={Input} name={'rememberMe'} type={'checkbox'}/>remember me
        </div>
        {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
        <div>
            <button>Login</button>
        </div>
        dm04dp12m
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h3>Login</h3>
            <div>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>)
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);