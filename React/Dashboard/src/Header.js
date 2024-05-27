import React from 'react'

const Header = ({title,width}) => {
  return (
    <header className='Header'>
      <h1>{title}</h1>
      {width<780 ? <p>Mobile</p>
      : width<992 ? <p>Tab</p>
      : <p>Laptop</p>}
    </header>
  )
}

export default Header
