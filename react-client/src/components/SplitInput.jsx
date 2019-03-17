import React from 'react';

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
              </label> according to 
              <select onChange={this.changeHandler} name="sortRule" selected="random">
                <option value="random" >Random</option>
                <option value="quality1">{'quality1'}</option>
                <option value="quality2">{'quality2'}</option>
                <option value="quality3">{'quality3'}</option>
              </select> 
              <input type="submit" value="GO" />
            </form>
        </div>
      )
  }
} 

export default Groups;