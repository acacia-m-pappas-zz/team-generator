import React from 'react';
import styled from 'styled-components';

const GroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const Groups = (props) => {
  // console.log('props in groups', props);
  if(props.phase >= 3){
    return (
      <GroupContainer>
        <h4>  Groups </h4>
          <div>
            <h4>Group 1</h4>
            <div>student1</div>
            <div>student2</div>
            <div>student3</div>
          </div>

          <div>
            <h4>Group 2</h4>
            <div>student1</div>
            <div>student2</div>
            <div>student3</div>
          </div>

          <div>
            <h4>Group 3</h4>
            <div>student1</div>
            <div>student2</div>
            <div>student3</div>
          </div>
      </GroupContainer>
    )
  } else {
    return <div></div>
  }
    {/* { props.classes.map(item => <ListItem item={item}/>)} */}
}

export default Groups;