import React, { useState } from 'react'

const Register = ({setAuth}) => {
  const [register, setRegister] = useState();

  return (
    <>
      <h1>Register</h1>
      <form>
        <input
          className="form-control my-3"
          type="email"
          name="email"
          placeholder="email"
        />
        <input
          className="form-control my-3"
          type="password"
          name="password"
          placeholder="password"
        />
        <input
          className="form-control my-3"
          type="text"
          name="email"
          placeholder="email"
        />
      </form>
    </>
  );
}

export default Register