import React from 'react'
import { Link } from 'react-router-dom'
const Nav = ({search,setsearch}) => {
  return (
    <nav className='Nav'>
      <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="Search Blogs">Search Blogs</label>
        <input 
        autoFocus
        type="text"
        value={search}
        placeholder='Search'
        onChange={(e)=>setsearch(e.target.value)}/>
      </form>
      <Link to="/">Home</Link>
      <Link to="/post">Post</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Nav
