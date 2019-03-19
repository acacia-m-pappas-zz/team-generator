import React from 'react';
import axios from './../axios.js';
import styled from 'styled-components';
import StudentInput from './StudentInputForm.jsx';

const ClassName = styled.form`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: left;
`;

const StudentForm = styled(ClassName)``;

class NewClassForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formPhase: 0,
      className:'',
      newClass: [],
      firstName: '',
      lastName: ''
    }
    this.next = this.next.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addStudent = this.addStudent.bind(this);
    this.postClass = this.postClass.bind(this);
  }

  next() {
    this.setState({
      formPhase: this.state.formPhase += 1
    })
  }

  handleSubmit(e) {
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

  addStudent(e){
    e.preventDefault();
    var addedStudent = this.state.newClass.concat([{
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }])
    this.setState({ 
      newClass: addedStudent,
      firstName: '',
      lastName: ''
    });
  }

  postClass(e){
    //axios post here to send object below
    var createdClass = {
      className: this.state.className,
      students: this.state.newClass
    }
    console.log('class posted', createdClass)
  }

  render() {
    console.log('state in class form', this.state)
      return (
        <div>
          {this.state.formPhase === 0 &&
          <ClassName onSubmit={this.handleSubmit}>
            <label>
              Class Name:
              <input
                name="className"
                type="text"
                value={this.state.className || ''}
                onChange={this.handleInputChange} />
            </label>
            <input type="submit" value="Next" required />
          </ClassName>
          }
          {this.state.formPhase === 1 && 
            <div>
              <h4>Students of {this.state.className}</h4>
              {
                this.state.newClass.map((student, i) => {
                  return <div key={i}>{`${student.firstName} ${student.lastName}`}</div>
                })
              }
              <StudentForm onSubmit={this.addStudent}>
                <StudentInput state={this.state} handleChange={this.handleInputChange}/>
                <input type="submit" value="Add Student" />
                <input type="button" value="I'm done adding students" onClick={this.postClass}/>
              </StudentForm>
            </div>
          }
        </div>
      )
    } 
}


export default NewClassForm;