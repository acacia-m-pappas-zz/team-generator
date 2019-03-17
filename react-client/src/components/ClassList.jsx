import React from 'react';
import ClassItem from './ClassItem.jsx';

const ClassList = (props) => (
  <div>
    <h4>My Classes</h4>
    <p>Which class would you like to use? (click one)</p>
    {props.classes.map(item => <ClassItem item={item} updateClass={props.updateClass}/>)}
  </div>
)

export default ClassList;