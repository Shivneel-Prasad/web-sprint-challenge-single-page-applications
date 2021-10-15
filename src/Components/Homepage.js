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
            <Link to='/'>
                <button id='order-pizza' name='homeBtn'>Home</button>
            </Link>
          </li>
          <li>
            <Link to='/'>
                <button name='helpBtn'>Help</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className='Container'>
        <img className='home-image' src={image} alt='Pizza'/>
        <Link to='/pizza'>
          <button className='orderBtn'>Order Now</button>
        </Link>
      </div>
    </>
  )
}