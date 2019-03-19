import React from 'react';
import styled from 'styled-components';
import GroupItem from './GroupItem.jsx';

const GroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const Groups = (props) => {
  return (
    <GroupContainer>
      <h4>Your Groups</h4>
      {props.groups.map((group, index) => {
        return (
          <div key={index}>
            <ul></ul>
            {
              group.map((subitem, i) => {
                return (
                  <div key={i}>{`${subitem.firstName} ${subitem.lastName}`}</div>
                )
              })
            }
          </div>
        )
      })
      }
    </GroupContainer>
  )
} 


export default Groups;