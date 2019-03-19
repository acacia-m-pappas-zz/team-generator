import React from 'react';
import styled from 'styled-components';

const StudentInput = (props) => {
    return (
      <div>
        <label>First Name: 
          <textarea name="firstName" value={props.state.firstName} 
          onChange={props.handleChange} />
        </label>
        <label>Last Name: 
          <textarea name="lastName" value={props.state.lastName} 
          onChange={props.handleChange} />
        </label>
      </div>
    )
}


export default StudentInput; 