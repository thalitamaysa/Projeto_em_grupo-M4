import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function ButtonLogin() {

return (
    <>
        <Link to='/login'><Button className='btn'>Login</Button></Link>
    </>
  )
}

