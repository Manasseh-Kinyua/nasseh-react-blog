import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>Sorry</h2>
      <p>This resource does not exist</p>
      <Link to='/'>Back to Home Page...</Link>
    </div>
  )
}

export default NotFound
