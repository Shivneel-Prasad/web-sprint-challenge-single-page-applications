import React, { useState, useEffect } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import * as yup from 'yup'
// import axios from 'axios'
import Schema from './Components/Schema'
import Homepage from './Components/Homepage'
import Confirmation from './Components/Confirmation'
import Order from './Components/OrderForm'


const initialFormValues = {
  customerName: '',
  pizzaSize: '',
  Pepperoni: false,
  Sausage: false,
  Bacon: false,
  Chicken: false,
  Onions: false,
  Olives: false,
  Pineapple: false,
  Cheese: false,
  Special: ''
}

const initialFormErrors = {
  customerName: 'Please provide a name for the order',
  pizzaSize: 'Please choose the size of the pizza'
}

export default function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [confirmation, setConfirmation] = useState(initialFormValues)
  
  const creatNewPizzaOrder = NewPizzaOrder => {
    setConfirmation(NewPizzaOrder);
    setFormValues(initialFormValues);
  }

  const verify = (name, value) => {
    // Running validation with Yup
    yup.reach(Schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: '' })
      }).catch(err => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] })
      })
  }

  const inputChange = (name, value) => {
    verify(name, value)
    setFormValues({
      ...formValues,
      [name]: value // this is not an array
    })
  }

  const formSubmit = () => {
    const NewPizzaOrder = {
      customerName: formValues.customerName.trim(),
      pizzaSize: formValues.pizzaSize.trim(),
      Toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Chicken', 'Onions', 'Olives', 'Pineapple', 'Cheese'].filter(topping => !!formValues[topping]),
      specials: formValues.specials.trim()
    };
    creatNewPizzaOrder(NewPizzaOrder);
  }

  return (
    <Switch>
      <Route path='/pizza'>
        <Order 
          values={formValues}
          submit={formSubmit}
          change={inputChange}
          err={formErrors}
        />
      </Route>
      <Route path='/Order/confirmation'>
        <Confirmation details={formValues} />
      </Route>
      <Route path='/'>
        <Homepage />
      </Route>
    </Switch>
  )
};

