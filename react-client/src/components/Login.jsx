import React from 'react';

const Login = (props) => (
  <div>
    <p>Enter a list of students to generate groups!</p>
      <form>
        <label>
          Your Email:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="view my classes" />
      </form>
  </div>
)

export default Login;

