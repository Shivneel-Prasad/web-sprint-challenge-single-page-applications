import React from 'react'

export default function Confirmation({ details }){
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
</div>
  )
}