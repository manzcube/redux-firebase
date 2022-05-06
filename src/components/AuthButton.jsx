import React, { useState } from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase-config'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { signout } from '../services/auth/authSlice'


const AuthButton = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(signout()) 
        navigate('/login') 
    }

    const renderAuthButton = () => {
        if(auth) {
            return (
                <div>
                    <span className='mx-6 text-lg text-gray-700 text-center font-bold text-start'>{auth.currentUser.displayName}</span>
                    <Button onClick={logout}>Sign Out</Button>
                </div>
            )
        } 
        return <Button onClick={() => console.log('sign in')}>
            <Link to='/login'>Sign In</Link>
        </Button>
    }

    return (
        <div>
            {renderAuthButton()}
        </div>
    )
}

export default AuthButton