import React from 'react';
import SelectQualities from './SelectQualities.jsx';
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
    if (this.props.phase >= 2) {
      return (
        <SplitInputContainer>
          <h4>Split into groups of </h4>
          <form >
            <label>
              <input type="number" name="groupSize" value={this.state.groupSize} min="1" max="10" onChange={this.changeHandler} />
            </label>
            {/* <SelectQualities teacher={this.props.teacher} changeHandler={this.changeHandler} /> */}
            <input type="button" value="GO" onClick={() => { this.props.groupBy(this.state.groupSize) }} />
          </form>
        </SplitInputContainer>
      )
    } else {
      return <div></div>
    }
  }
}

export default SplitInput;