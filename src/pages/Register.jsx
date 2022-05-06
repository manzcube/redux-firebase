import React, { useEffect, useState } from 'react'
import FormInput from '../components/FormInput'
import Alert from '../components/Alert'
import Button from '../components/Button'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { register, reset } from '../services/auth/authSlice'

const Register = () => {
  //Declare Hooks varibles
  const [error, setError] = useState() //This si at the time of catching error, save them in this variable
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  //Deesctructurate hooks variables
  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
  console.log('This is user from the store in register page:', { user, isLoading, isError, isSuccess, message })

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message. navigate, dispatch])

  const onChange = (e) => {
     setFormData((prevState) => ({
       ...prevState,
      [e.target.name]: e.target.value
     }))
  }

  const onSubmit = e => {
    e.preventDefault()
    if(password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name, 
        email, 
        password,
      }
      dispatch(register(userData)) //If the user already exists, navigate to login 
    }
  }

  return (
    <div className='w-full max-w-md m-auto'>
      {error && <Alert message={error} />}
      <form onSubmit={onSubmit} className='bg-white shadow-md rounded px-8 pt-6 mb-4'>
      <FormInput 
          value={name}
          label='Name'
          inputProps={{ type: 'text', name: 'name', placeholder: 'Your name', id: 'name' }}
          onChange={onChange}
        />
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
        <FormInput 
          value={password2}
          label='Repeat Password'
          inputProps={{ type: 'password', name: 'password2', id: 'password2' }}
          onChange={onChange}
        />

        <Button inputProps={{ type: 'submit'}}>Submit</Button>
      </form>
    </div>
  )
}

export default Register