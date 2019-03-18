import React from 'react';
import ClassItem from './ClassItem.jsx';
import NewClassForm from './NewClassForm.jsx';
import styled from 'styled-components';

const ClassListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

const ClassHeader = styled.h5`
  
`;

const ClassList = (props) => {
  if(props.phase >= 1){
    return (
    <ClassListContainer>
      <ClassHeader>My Classes</ClassHeader>
      <p>Select one of your classes</p>
      {props.classes.map(item => <ClassItem item={item} updateClass={props.updateClass}/>)}
      {/* <NewClassForm/> */}
    </ClassListContainer>
    )
  } else {
    return <div></div>
  }
}

export default ClassList;