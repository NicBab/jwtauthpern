import React, { useState } from 'react'

const Register = ({setAuth}) => {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: ""
  })

  const {email, password, name} = inputs

  const onChange = (e) => {
    setInputs({...inputs, [e.target.name] : e.target.value})
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()

    try {
      const body = {name, email, password}
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(body)
      })
      const parseRes = await response.json()

      localStorage.setItem("token", parseRes.token)

      setAuth(true)
    } catch (err) {
      console.error(err.message)
    }

  };

  return (
    <>
      <h1>Register</h1>
      <form>
      <h1 className="text-center my-5">Register</h1>
      <form onSubmit={onSubmitForm}>
        <input
          className="form-control my-3"
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => onChange(e)}
        />

        <input
          className="form-control my-3"
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => onChange(e)}
        />

        <input
          className="form-control my-3"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => onChange(e)}
        />

        <input
          className="form-control my-3"
          type="text"
          name="email"
          placeholder="email"
          value={password}
          onChange={(e) => onChange(e)}
        />
        <button className="btn btn-success">Submit</button>
      </form>
    </>
  );

 }

}

export default Register