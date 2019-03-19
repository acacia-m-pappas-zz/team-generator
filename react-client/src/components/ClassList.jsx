import React from 'react';
import ClassItem from './ClassItem.jsx';
import styled from 'styled-components';

const ClassListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

const ClassList = (props) => {
  if (props.phase >= 1) {
    return (
      <ClassListContainer>
        <h4>Select a class </h4>
        {props.classes.map(item => <ClassItem item={item} updateClass={props.updateClass} />)}
      </ClassListContainer>
    )
  } else {
    return <div></div>
  }
}

export default ClassList;