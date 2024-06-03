import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonLayout = ({ children1 }) => {
  return (
    <div>
      <header>
        <h1>Simple Layout</h1>
      </header>
      <main>
        <div style={{
          display: 'flex',

        }}>

          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/create-post">Create Post</Link></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/notification">Notifications</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/edit-profile">EditProfile</Link></li>
              <li><Link to="/post-details">PostDetails</Link></li>
            </ul>
          </nav>
          <div style={{
            padding: '20px',
          }}>
            {children1}
          </div>
        </div>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  )
}
