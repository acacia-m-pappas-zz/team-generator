import React from 'react';
import styled from 'styled-components';

const StudentForm = styled.form`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  font-weight: bold; 
`;

const NameInputs = styled.input`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-radius: 3px;
  width: 200px; 
  height: 22px;
  margin: 5px; 
`;

const ButtonAddStudent = styled.input`
  color: white;
  background-color: grey; 
  font-size: 1em;
  margin: 4px;
  padding: 0.3em 1em;
  border-radius: 3px;
  :hover {
    background-color: #993399;
    color: white;
  }
`;


class StudentInputForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmit(e){
    e.preventDefault();
    this.props.addStudentToClass(this.state);
    this.clear();
  }

  clear(){
    this.setState({
      firstName: '',
      lastName: ''
    })
  }

  render () {
    return (
      <StudentForm onSubmit={this.onSubmit}>
        <label>First Name: 
          <NameInputs name="firstName" value={this.state.firstName} 
          onChange={this.handleChange} />
        </label>
        <label>Last Name: 
          <NameInputs name="lastName" value={this.state.lastName} 
          onChange={this.handleChange} />
        </label>
        <ButtonAddStudent type="submit" value="Add Student" />
      </StudentForm>
    )
  }
}


export default StudentInputForm; 