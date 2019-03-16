import React from 'react';

const Groups = (props) => (
  <div>
      <form>
        <label>Split 
          <input type="text" name="class" />
        </label>
        <label> into groups of 
          <input type="number" name="groupSize" />
        </label>
        <input type="submit" value="GO" />
      </form>
  </div>
)

export default Groups;