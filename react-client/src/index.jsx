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

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const Header = styled(Flex)`
  border: solid grey; 
`;

const Footer = styled(Flex)``;
const Main = styled(Flex)``;
const AddClass = styled.button`
  margin: 1px;
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
  }

  updateClass(eventName) {
    var classList = this.state.classes;
    for (var i = 0; i < classList.length; i++) {
      if (classList[i].className === eventName) {
        this.setState({
          phase: 2,
          students: classList[i].students
        })
      }
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
    console.log('newClass clicked');
    this.setState({
      phase: 'form'
    })
  }

  render() {
    return (
      <div>
        <Header>
          <img className="teamImg"
            src="http://images.clipartpanda.com/team-clipart-kids-team-clipart-gallery.jpg"
            alt="teams" />
          <h1>teamz4u</h1>
          <p>A team generator for teachers.</p>
        </Header>

        <Main>
          <Login login={this.login} newClass={this.newClass} />
          <AddClass onClick={this.newClass}>add a class</AddClass>
          <NewClassForm phase={this.state.phase} />
          <ClassList classes={this.state.classes} updateClass={this.updateClass} phase={this.state.phase} />
          <SplitInput class={this.state.class} groupBy={this.groupBy} teacher={this.state.teacher} phase={this.state.phase} />
          <Groups groups={this.state.groups} phase={this.state.phase} />
        </Main>
        <Footer>
        </Footer>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));