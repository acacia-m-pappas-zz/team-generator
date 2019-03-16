import React from 'react';
// import ListItem from './ListItem.jsx';

const Groups = (props) => (
  <div>
    <h4> '[current classname]' Groups </h4>
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

    {/* { props.classes.map(item => <ListItem item={item}/>)} */}
  </div>
)

export default Groups;