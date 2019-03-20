import React from 'react';
import styled from 'styled-components';

const SplitInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 50px;
  font-size: 14px;
  display: flex;
  border-radius: 3px;
  margin: 5px; 
`;

const List = styled.ul`
  list-style: none;
  border: solid grey 1px; 
  margin: 5px; 
  padding: 5px; 
  border-radius: 5px;
`;

const Student = styled.li`
  list-style: none;
  margin: 1px; 
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

class SplitInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groupSize: 1,
      sortRule: 'random'
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    if(this.props.students.length === undefined){
      <div>please add a class</div>
    } else {
      return (
        <SplitInputContainer>
          <h4>Split into groups of: </h4>
          <form >
            <label>
              <Input type="number" name="groupSize" value={this.state.groupSize} min="2" max="10" onChange={this.changeHandler} />
            </label>
            <Button type="button" value="GO" onClick={() => { this.props.groupBy(this.state.groupSize) }} />
          </form>
          <List>
            {this.props.students.map((student, i) => {
              return <Student key={i} >{`${student.firstName} ${student.lastName}`}</Student>
            })}
          </List>
        </SplitInputContainer>
      )
    }
  }
}


export default SplitInput;