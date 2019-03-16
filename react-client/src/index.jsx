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
      data: {}
    }
  }

  componentDidMount() {
    //axios call here to get data...
    this.setState({
      data: dummy
    });
  }

  render () {
    return (
    <div>
      <h1>teamz4u :)</h1>
      <Login/>

      <ClassList data={this.state.data}/>
      <NewClassForm/>

      <SplitInput data={this.state.data}/>
      <Groups data={this.state.data}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));