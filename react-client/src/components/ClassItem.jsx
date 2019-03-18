import React from 'react';
import styled from 'styled-components';

//make them all look like buttons
const Class = styled.div`
color: palevioletred;
font-size: 1em;
margin: 1px;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

const ClassItem = (props) => (
  <Class key={props.item.className} onClick=
  {() => {props.updateClass(props.item.className)}}>
    {props.item.className}
  </Class>
)

export default ClassItem;