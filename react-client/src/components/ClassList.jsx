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
  return (
    <ClassListContainer>
      <h4>Select a class </h4>
      {props.classes.map(item => <ClassItem key={item.className} item={item} updateClass={props.updateClass} />)}
    </ClassListContainer>
  )
} 


export default ClassList;