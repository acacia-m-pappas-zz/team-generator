import React from 'react';
import axios from './../axios.js';
import styled from 'styled-components';

const Form1 = styled.form`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

class NewClassForm extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      formPhase: 0,
      classSize: 0,
      firstName: '',
      lastName: ''
    }
    this.next = this.next.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  next(){
    this.setState({
      formPhase: this.state.formPhase +=1
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.next()
    console.log('submitted')
    //send axios post
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    if(this.props.phase === 'form'){
      if(this.state.formPhase === 0){
        return (
          <Form1 onSubmit={this.handleSubmit}>
          <label>
            What is this class called? 
            <input
              name="className"
              type="text"
              value={this.state.className}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            How many students would you like to add? 
            <input
              name="classSize"
              type="number"
              min="1"
              max="150"
              value={this.state.classSize}
              onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Next" />
        </Form1>
        )
      } else if (this.state.formPhase === 1){
        var students = Array(this.state.classSize)
        students.map((item) => {
          return (<div>
            form element here
          </div>)
        })
      }
    } else {
      return <div></div>
    }
  }
 }

export default NewClassForm;