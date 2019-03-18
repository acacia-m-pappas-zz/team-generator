import React from 'react';

const Groups = (props) => {
  console.log('in groups', props);
  if(props.phase >= 3){
    return (
      <div>
        <h4> {this.props.class.className} Groups </h4>
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
      </div>
    )
  } else {
    return <div></div>
  }
    {/* { props.classes.map(item => <ListItem item={item}/>)} */}
}

export default Groups;