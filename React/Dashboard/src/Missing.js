import React from 'react'
import { Link } from 'react-router-dom';
const Missing = () => {
  return (
    <main className='Missing'>
      <p> 404: Page not found</p>
      <Link to="/">Please visit this page</Link>
    </main>
  )
}

export default Missing
