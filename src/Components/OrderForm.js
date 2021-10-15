import React from 'react'
import { Link } from 'react-router-dom';
// import Schema from './Schema'


export default function Order(props) {
    const { values, submit, change, err} = props

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    const onChange = (event) => {
        const { name, value, checked, type } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form onSubmit={onSubmit}>
            <div id='order-pizza'>
              <h1>Create your own custom pizza</h1>
                <div className='errors'>
                  <p>{err.customerName}</p>
                  <p>{err.pizzaSize}</p>
                </div>
            </div>

            <div className='form-inputs'>
            <label>Enter Your Name Here&nbsp;
                <input id='name-input'
                  name='customerName'
                  type='text'
                  value={values.customerName}
                  onChange={onChange}
                />
            </label>

            <label>Choose Pizza Size!&nbsp;
                <select id='size-dropdown'
                  onChange={onChange}
                  value={values.pizzaSize}
                  name='pizzaSize'
                >
                    <option value=''>--Select a Size--</option>
                    <option value='Personal'>Personal</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='X-Large'>X-Large</option>
                </select>
            </label>
          </div>          

          <div className='form-checkboxes'>Choose a Topping!&nbsp;
            <h3>Choose upto 3 toppings per Pizza</h3>
            <label>Pepperoni&nbsp;
                <input
                  type='checkbox'
                  checked={values.pepperoni}
                  name='Pepperoni'
                  onChange={onChange}
                />
            </label>

            <label>Sausage&nbsp;
                <input
                  type='checkbox'
                  checked={values.sausage}
                  name='Sausage'
                  onChange={onChange}
                />
            </label>

            <label>Bacon&nbsp;
                <input
                  type='checkbox'
                  checked={values.bacon}
                  name='Bacon'
                  onChange={onChange}
                />
            </label>

            <label>Chicken&nbsp;
                <input
                  type='checkbox'
                  checked={values.chicken}
                  name='Chicken'
                  onChange={onChange}
                />
            </label>

            <label>Onions&nbsp;
                <input
                  type='checkbox'
                  checked={values.onions}
                  name='Onions'
                  onChange={onChange}
                />
            </label>

            <label>Olives&nbsp;
                <input
                  type='checkbox'
                  checked={values.olives}
                  name='Olives'
                  onChange={onChange}
                />
            </label>

            <label>Pineapple&nbsp;
                <input
                  type='checkbox'
                  checked={values.pineapple}
                  name='Pineapple'
                  onChange={onChange}
                />
            </label>

            <label>Cheese&nbsp;
                <input
                  type='checkbox'
                  checked={values.cheese}
                  name='Cheese'
                  onChange={onChange}
                />
            </label>
          </div>
          <label>Special Instructions&nbsp;
            <textarea
                name='specials'
                type='text'
                onChange={onChange}
                value={values.specials}
            />
          </label>
          <div className='nav-link'>
                <Link to='/order/confirmation'>
                    <button>Place Your Order!</button>
                </Link>
                <Link to='/'>
                    <button>Cancel Order!</button>
                </Link>
              </div>
        </form>
    )
}