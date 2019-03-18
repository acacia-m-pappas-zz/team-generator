import React from 'react';
import SelectQualities from './SelectQualities.jsx';

class Groups extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      groupSize: 1,
      sortRule: 'random'
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e){
    this.setState({
      [e.name]: e.target.value
    })
  }
  
  render() {
    return (
        <div>
          <div>Split {this.props.class.className} into groups of </div>
            <form>
              <label onChange={this.changeHandler}>
                <input type="number" name="groupSize" min="1" max="10"/>
              </label> 
              {/* <SelectQualities teacher={this.props.teacher} changeHandler={this.changeHandler} /> */}
              <input type="submit" value="GO" />
            </form>
        </div>
      )
  }
} 

export default Groups;