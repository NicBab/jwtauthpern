import React, { useState } from 'react'

const Login = ({setAuth}) => {

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })

   const { email, password } = inputs

   const onChange = (e) => {
     setInputs({...inputs, [e.target.name] : e.target.value})
   }

  return (
    <>
     <h1 className="text-center my-5">Login</h1>
      <form>
        <input
          className="form-control my-3"
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={e => onChange(e)}
        />
        <input
          className="form-control my-3"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={e => onChange(e)}
        />
        <button className="btn btn-success">Login</button>
      </form>
    </>
  );
}

export default Login