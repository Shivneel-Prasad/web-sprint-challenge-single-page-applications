import React from 'react'
import { Link } from 'react-router-dom'
import image from '../Assets/Pizza.jpg'

export default function Homepage() {

  return (
    <>
      <div className='App'>
        <h1>Welcome to Lambda Eats</h1>
        <ul className='nav'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>Help</Link>
          </li>
        </ul>
      </div>
      <div className='Container'>
        <img className='home-image' src={image} alt='Pizza'/>
        <Link to='/pizza'>
          <button className='orderBtn'>Place Order Now</button>
        </Link>
      </div>
    </>
  )
}