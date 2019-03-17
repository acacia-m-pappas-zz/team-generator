import React from 'react';

const ClassItem = (props) => (
  <div key={props.item.className} onClick=
  {() => {props.updateClass(props.item.className)}}>
    {props.item.className}
  </div>
)

export default ClassItem;