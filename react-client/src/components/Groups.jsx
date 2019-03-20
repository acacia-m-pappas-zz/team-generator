import React from 'react';
import styled from 'styled-components';
import GroupItem from './GroupItem.jsx';

const GroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const TaDa = styled.h4`

`;

const Group = styled.div`
  border: solid grey 1px; 
  margin: 5px; 
  padding: 5px; 
  border-radius: 5px;
`;

const Student = styled.div`
  margin: 1px; 
`;

const Groups = (props) => {
  return (
    <GroupContainer>
      <TaDa>Here are your groups!</TaDa>
      {props.groups.map((group, index) => {
        return (
          <Group key={index}>
            {
              group.map((subitem, i) => {
                return (
                  <Student key={i}>{`${subitem.firstName} ${subitem.lastName}`}</Student>
                )
              })
            }
          </Group>
        )
      })
      }
    </GroupContainer>
  )
} 


export default Groups;