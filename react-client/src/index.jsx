import React from 'react';
import ReactDOM from 'react-dom';
import axios from './axios.js';
import dummy from './dummyData.js';
import ClassList from './components/ClassList.jsx';
import Groups from './components/Groups.jsx';
import SplitInput from './components/SplitInput.jsx';
import NewClassForm from './components/NewClassForm.jsx';
import Login from './components/Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      all: [],
      classes: []
    }
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    //axios call here to get data...
    var newState = { all: dummy.teachers}
    this.setState(newState);
  }

  login(email){
    var teachers = this.state.all;
    var classesByTeacher;
    for(var i=0; i< teachers.length; i++){
      if(email === teachers[i].email){
        var newState = {
          classes: teachers[i].classes
        } 
        this.setState(newState)
        return;
      }
    }
  }

  render () {
    console.log('dis clsses', this.state.classes)
    return (
    <div>
      <h1>teamz4u :)</h1>
      <Login login={this.login}/>

      <ClassList classes={this.state.classes}/>
      <NewClassForm/>

      <SplitInput data={this.state.data}/>
      <Groups data={this.state.data}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));