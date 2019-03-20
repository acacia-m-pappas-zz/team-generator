import React from 'react';
import ReactDOM from 'react-dom';
import axios from './axios.js';
import styled from 'styled-components';
import sorters from './sortingMethods.js';
import dummy from './dummyData.js';
import ClassList from './components/ClassList.jsx';
import Groups from './components/Groups.jsx';
import SplitInput from './components/SplitInput.jsx';
import newClassForm from './components/NewClassForm.jsx';
import Login from './components/Login.jsx';
import NewClassForm from './components/NewClassForm.jsx';

const All = styled.div`
  font-family: Arial, Helvetica, sans-serif; 
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const Header = styled(Flex)``;
const Footer = styled(Flex)``;
const Main = styled(Flex)``;
const AddClass = styled.button`
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

const P = styled.p`
  font-style: italic; 
  padding: 2px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 0,
      all: [],
      classes: [],
      students: [],
      teacher: {},
      number: 0,
      groups: []
    }
    this.login = this.login.bind(this);
    this.updateClass = this.updateClass.bind(this);
    this.groupBy = this.groupBy.bind(this);
    this.newClass = this.newClass.bind(this);
  }

  componentDidMount() {
    //axios call here to get data...
    var newState = { all: dummy.teachers }
    this.setState(newState);
  }

  login(email) {
    if(this.state.phase === 0){
      var teachers = this.state.all;
      for (var i = 0; i < teachers.length; i++) {
        if (email === teachers[i].email) {
          var newState = {
            phase: 1,
            teacher: teachers[i],
            classes: teachers[i].classes
          }
          this.setState(newState)
          return;
        }
      }
    } else {
      this.setState({ phase: 1})
    }
  }

  updateClass(eventName) {
    if(this.state.phase === 1){
      var classList = this.state.classes;
      for (var i = 0; i < classList.length; i++) {
        if (classList[i].className === eventName) {
          this.setState({
            phase: 2,
            students: classList[i].students
          })
        }
      }
    } else {
      this.setState({ phase: 2 })
    }
  }

  groupBy(num) {
    var groups = sorters.random(this.state.students, num);
    this.setState({
      phase: 3,
      groups: groups
    })
  }

  newClass() {
    this.setState({
      phase: 'form'
    })
  }

  render() {
    return (
      <All>
        <Header>
          <img className="teamImg"
            src="http://images.clipartpanda.com/team-clipart-kids-team-clipart-gallery.jpg"
            alt="teams" />
          <h1>teamz4u</h1>
          <P>A team generator for teachers.</P>
          
        </Header>

        <Main>
          <Login login={this.login} newClass={this.newClass} />
          <AddClass onClick={this.newClass}>Add a Class</AddClass>
          {this.state.phase === 'form' && 
            <NewClassForm phase={this.state.phase} />
          }
          {this.state.phase === 1 &&
            <ClassList classes={this.state.classes} updateClass={this.updateClass} phase={this.state.phase} />
          }
          {this.state.phase === 2 && 
            <SplitInput students={this.state.students} groupBy={this.groupBy} teacher={this.state.teacher} phase={this.state.phase} />
          }
          {this.state.phase === 3 &&
            <Groups groups={this.state.groups} phase={this.state.phase} />
          }
        </Main>
        <Footer>
        </Footer>
      </All>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));