import React, { useState } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'


const AuthButton = () => {
    const [auth, setAuth] = useState(false)

    const renderAuthButton = () => {
        if(auth) {
            return <Button onClick={() => setAuth(true)}>
                <Link to='/'>Sign Out</Link>
            </Button>
        } 
        return <Button onClick={() => setAuth(false)}>
            <Link to='/login'>Sign In</Link>
        </Button>
    }

    return (
        <div>{renderAuthButton()}</div>
    )
}

export default AuthButton