import React from 'react';
import styled from 'styled-components';

const SplitInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
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
    return (
      <SplitInputContainer>
        <h4>Split into groups of </h4>
        <form >
          <label>
            <input type="number" name="groupSize" value={this.state.groupSize} min="2" max="10" onChange={this.changeHandler} />
          </label>
          <input type="button" value="GO" onClick={() => { this.props.groupBy(this.state.groupSize) }} />
        </form>
        <div>
          {this.props.students.map((student, i) => {
            return <div key={i} >{`${student.firstName} ${student.lastName}`}</div>
          })}
        </div>
      </SplitInputContainer>
    )
  }
}


export default SplitInput;