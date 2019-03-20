import React from 'react';
import axios from './../axios.js';
import styled from 'styled-components';
import StudentInputForm from './StudentInputForm.jsx';

const AddStudentsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`;

const AddClassForm = styled.form`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`;

const AddStudentDiv = styled.div`
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

const StudentItem = styled.div`

`;
const ButtonPostClass = styled(Button)``;
const ClassTitle = styled.h4``;

class NewClassForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formPhase: 0,
      className:'',
      newClass: []
    }
    this.next = this.next.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addStudentToClass = this.addStudentToClass.bind(this);
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

  addStudentToClass(student){
    var currentStudents = this.state.newClass;
    var addedStudent = currentStudents.concat(student)
    console.log('added Student', addedStudent)
    this.setState({ 
      newClass: addedStudent,
    });
  }

  postClass(e){
    e.preventDefault();
    if(this.state.newClass.length === undefined){
      alert('Please add students');
    }
    var createdClass = {
      className: this.state.className,
      students: this.state.newClass
    }
    //axios post here to send object below
    console.log('class posted', createdClass)
  }

  render() {
      return (
        <AddStudentsContainer>
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
            <AddStudentDiv>
              <ClassTitle>Students of {this.state.className}</ClassTitle>
              {
                this.state.newClass.map((student, i) => {
                  return <StudentItem key={i}>{`${student.firstName} ${student.lastName}`}</StudentItem>
                })
              }
                <StudentInputForm addStudentToClass={this.addStudentToClass}/>

                <ButtonPostClass type="button" value="I'm done adding students" onClick={this.postClass}/>
            </AddStudentDiv>
          }
        </AddStudentsContainer>
      )
    } 
}


export default NewClassForm;