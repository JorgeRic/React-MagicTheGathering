import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/cards'>cards</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
