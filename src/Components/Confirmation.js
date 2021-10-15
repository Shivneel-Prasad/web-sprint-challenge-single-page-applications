import React from 'react'
import { Link, useHistory } from 'react-router-dom'


export default function Confirmation({ details }){
  const history = useHistory();

  if(!details) {
    return <h3>Loading Your Order, Please Wait!!</h3>
  }

  return (
    <div className='confirmation container'>
    <h2>{details.customerName}'s Order Information</h2>
    <p>Pizza Size: {details.pizzaSize}</p>
    {
        !!details.toppings && !!details.toppings.length &&
        <div>
            Toppings:
            <ul>
                {details.toppings.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        </div>
    }
    <p>Special Instructions: {details.specials}</p>
    <div className='nav-link'>
        <Link to='/'>
            <button>Return to Main Menu</button>
        </Link>
        <Link to='/order'>
            <button onClick={() => history.goBack()}>Go Back</button>
        </Link>
    </div>
</div>
  )
}