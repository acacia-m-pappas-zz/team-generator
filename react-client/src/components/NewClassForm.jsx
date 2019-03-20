import React from 'react';
import axios from './../axios.js';
import styled from 'styled-components';
import StudentInput from './StudentInputForm.jsx';

const AddStudents = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`;

const StudentForm = styled(AddStudents)``;

const AddClassForm = styled.form`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`;

const AddStudentForm = styled.form`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`;

const ClassName = styled.label`
  font-weight: bold; 
`;

const ClassInput = styled.input`
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
    color: white;
  }
`;

const Button2 = styled(Button)``;
const Button3 = styled(Button)``;

const ClassTitle = styled.h4``;

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
    console.log('added')
    // this.setState({ 
    //   formPhase: 1,
    //   newClass: addedStudent,
    //   firstName: '',
    //   lastName: ''
    // });
  }

  postClass(e){
    e.preventDefault();
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
        <AddStudents>
          {this.state.formPhase === 0 &&
          <AddClassForm onSubmit={this.handleSubmit}>
            <ClassName>
              Class Name:
              <ClassInput
                name="className"
                type="text"
                value={this.state.className || ''}
                onChange={this.handleInputChange} />
            </ClassName>
            <Button type="submit" value="Next" required/>
          </AddClassForm>
          }
          {this.state.formPhase === 1 && 
            <AddStudentForm>
              <ClassTitle>Students of {this.state.className}</ClassTitle>
              {
                this.state.newClass.map((student, i) => {
                  return <StudentItem key={i}>{`${student.firstName} ${student.lastName}`}</StudentItem>
                })
              }
              <StudentForm onSubmit={this.addStudent}>
                <StudentInput state={this.state} handleChange={this.handleInputChange}/>
                <Button2 type="submit" value="Add Student" />
                <Button3 type="button" value="I'm done adding students" onClick={this.postClass}/>
              </StudentForm>
            </AddStudentForm>
          }
        </AddStudents>
      )
    } 
}


export default NewClassForm;