import React from 'react';


const SelectQualities = (props) => {
  {console.log('props in SQ', props)}
  if(false){
  return (
    <div>according to
      <select onChange={props.changeHandler} name="sortRule" selected={props.qualities[0]} >
        { props.qualities.map((item) => {})}
        <option value="quality1">{'quality1'}</option>
        <option value="quality2">{'quality2'}</option>
        <option value="quality3">{'quality3'}</option>
      </select> 
    </div>
    )
  } else {
    <div></div>
  }
}


export default SelectQualities;

