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

const ClassList = (props) => {
  if(props.loggedIn === true){
    return (
    <ClassListContainer>
      <h4>My Classes</h4>
      <p>Which class would you like to use? (click one)</p>
      {props.classes.map(item => <ClassItem item={item} updateClass={props.updateClass}/>)}
      <NewClassForm/>
    </ClassListContainer>
    )
  } else {
    return <div></div>
  }
}

export default ClassList;