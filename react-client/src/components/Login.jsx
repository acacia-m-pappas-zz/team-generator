import React from 'react';
import validator from 'validator';

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
      <div>
        <p>Enter a list of students to generate groups!</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Your Email:
              <input type="text" name="name" value={this.state.email} onChange={this.changeHandler}/>
            </label>
            <input type="submit" value="view my classes"/>
          </form>
      </div>
    )
  }
} 

export default Login;

