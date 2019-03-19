import React from 'react';
import validator from 'validator';
import styled from 'styled-components';

const LoginContainer = styled.form`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  /* align-items: center; */
`;

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  changeHandler(e) {
    this.setState({email: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if(validator.isEmail(this.state.email)){
      this.props.login(this.state.email);
    } else {
      alert('Please enter a valid email');
    }
  }

  render () {
    return (
      <LoginContainer onSubmit={this.handleSubmit}>
        <p>Enter your email:</p>
          <label>
              <input type="text" name="name" value={this.state.email} onChange={this.changeHandler}/>
            </label>
          <input type="submit" value="view my classes"/>
      </LoginContainer>
    )
  }
} 

export default Login;

