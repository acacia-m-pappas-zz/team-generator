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
  if (props.phase >= 3) {
    return (
      <GroupContainer>
        {props.groups.map((group, index) => {
          return (
            <div key={index}>
              <ul></ul>
              {
                group.map((subitem, i) => {
                  return (
                    <div>{subitem.firstName}</div>
                  )
                })
              }
            </div>
          )
        })
        }
      </GroupContainer>
    )
  } else {
    return <div></div>
  }
}

export default Groups;