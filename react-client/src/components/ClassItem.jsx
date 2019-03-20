import React from 'react';
import styled from 'styled-components';

const Class = styled.div`
  color: grey;
  font-size: 1em;
  margin: 4px;
  padding: 0.3em 1.3em;
  border: 2px solid grey;
  border-radius: 3px;
  :hover {
    background-color: #993399;
    color: white;
  }
`;

const ClassItem = (props) => (
  <Class key={props.item.className} onClick=
  {() => {props.updateClass(props.item.className)}}>
    {props.item.className}
  </Class>
)

export default ClassItem;