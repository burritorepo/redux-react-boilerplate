import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { loginSuccess } from '../../store/actions';

import {
  UIInput,
  UICheckbox,
  UIButton
} from 'ui'

function FormLogin(props) {
  const {
    name,
    password,
    remember,
    onChange,
    onSubmit
  } = props;

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div><UIInput name="name" value={name} onChange={onChange} /></div>
        <div><UIInput name="password" value={password} onChange={onChange} /></div>
        <div><UICheckbox name="remember" value={remember} checked={remember} onChange={onChange} /></div>
        <UIButton type='submit' color={'primary'}> Login </UIButton>
      </form>
    </Fragment>
  )
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      remember: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Enviado')
  }

  render() {
    return (
      <Fragment>
        <h1>Login</h1>
        <FormLogin {...this.state}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit} />
      </Fragment>
    )
  }
}

export {
  Login
}
