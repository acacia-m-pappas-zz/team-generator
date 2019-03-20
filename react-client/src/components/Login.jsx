import React from 'react';
import validator from 'validator';
import styled from 'styled-components';

const LoginContainer = styled.form`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-radius: 3px;
  width: 200px; 
  height: 22px;
  margin: 5px; 
`;

const Button = styled.input`
  color: white;
  background-color: grey; 
  font-size: 1em;
  margin: 4px;
  padding: 0.3em 1em;
  border-radius: 3px;
  :hover {
    background-color: #993399;
    color: grey;
  }
`;

const Label = styled.label`
  font-weight: bold;
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
          <Label> Enter your email:
              <Input type="text" name="name" value={this.state.email} onChange={this.changeHandler}/>
            </Label>
          <Button type="submit" value="View My Classes"></Button>
      </LoginContainer>
    )
  }
} 

export default Login;

