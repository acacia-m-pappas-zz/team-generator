import React from 'react';
import styled from 'styled-components';

const StudentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  font-weight: bold; 
`;

const NameInputs = styled.input`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-radius: 3px;
  width: 200px; 
  height: 22px;
  margin: 5px; 
`;


const StudentInput = (props) => {
    return (
      <StudentContainer>
        <label>First Name: 
          <NameInputs name="firstName" value={props.state.firstName} 
          onChange={props.handleChange} />
        </label>
        <label>Last Name: 
          <NameInputs name="lastName" value={props.state.lastName} 
          onChange={props.handleChange} />
        </label>
      </StudentContainer>
    )
}


export default StudentInput; 