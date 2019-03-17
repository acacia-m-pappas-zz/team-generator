import React from 'react';
import ReactDOM from 'react-dom';
import axios from './axios.js';
import dummy from './dummyData.js';
import ClassList from './components/ClassList.jsx';
import Groups from './components/Groups.jsx';
import SplitInput from './components/SplitInput.jsx';
import Login from './components/Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      all: [],
      classes: [],
      class: {},
      number: 0
    }
    this.login = this.login.bind(this);
    this.updateClass = this.updateClass.bind(this);
    this.groupBy = this.groupBy.bind(this);
  }

  componentDidMount() {
    //axios call here to get data...
    var newState = { all: dummy.teachers}
    this.setState(newState);
  }

  login(email){
    var teachers = this.state.all;
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

  updateClass(eventName){
    var classList = this.state.classes;
    for(var i = 0; i < classList.length; i++){
      if(classList[i].className === eventName){
        this.setState({
          class: classList[i]
        })
        return;
      }
    }
  }

  groupBy(num) {
    this.setState({ number: num})
  }

  render () {
    console.log(this.state.class)
    return (
    <div>
      <h1>teamz4u :)</h1>
      <Login login={this.login}/>

      <ClassList classes={this.state.classes} updateClass={this.updateClass}/>

      <SplitInput class={this.state.class} groupBy={this.groupBy}/>
      <Groups data={this.state.data}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));