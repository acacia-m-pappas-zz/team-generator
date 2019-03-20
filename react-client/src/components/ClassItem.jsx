import React from 'react';
import styled from 'styled-components';

//make them all look like buttons
const Class = styled.div`
  color: grey;
  font-size: 1em;
  margin: 1px;
  padding: 0.40em 1.3em;
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