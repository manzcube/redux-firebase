import React, { useState } from 'react'
import FormInput from '../components/FormInput'
import Alert from '../components/Alert'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Login = () => {
  //Declare Hooks varibles
  const [error, setError] = useState() //This si at the time of catching error, save them in this variable
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  //Deesctructurate hooks variables
  const { email, password } = formData

  const onChange = (e) => {
     setFormData((prevState) => ({
       ...prevState,
      [e.target.name]: e.target.value
     }))
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className='w-full max-w-md m-auto'>
      {error && <Alert message={error} />}
      <form onSubmit={onSubmit} className='bg-white shadow-md rounded px-8 pt-6 mb-4'>
        <FormInput 
          value={email}
          label='Email'
          inputProps={{ type: 'email', name: 'email', placeholder: 'Your email', id: 'email' }}
          onChange={onChange}
        />
        <FormInput 
          value={password}
          label='Password'
          inputProps={{ type: 'password', name: 'password', id: 'password' }}
          onChange={onChange}
        />

        <Button inputProps={{ type: 'submit'}}>Submit</Button>
      </form>
      <Link to='/register' className='text-sm text-blue-400 mb-3'>Don't have an account?</Link>
    </div>
  )
}

export default Login