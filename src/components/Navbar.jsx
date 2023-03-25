import React from 'react'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">{ props.title }</a>
      </div>
    </nav>
  )
}

export default Navbar