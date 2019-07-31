import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
     <Link to="/trees">My Post</Link>
     <Link to="/map">Map</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

// const unauthenticatedOptions = (
//   <React.Fragment>
//     <Link to="/sign-up">Sign Up</Link>
//     <Link to="/sign-in">Sign In</Link>
//   </React.Fragment>
// )

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
    <Link to="/dashboard">dashboard</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
          { user && <span className="save"> Save Nature </span>}
    <nav>
      { user ? authenticatedOptions : "" }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
