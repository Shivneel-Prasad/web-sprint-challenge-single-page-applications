import * as yup from 'yup'

const Schema = yup.object().shape({
    customerName: yup
        .string()
        .trim()
        .required('Customer Name is Required'),
    pizzaSize: yup
        .string()
        .oneOf(['Personal', 'Small', 'Medium', 'Large', 'X-Large'])
        .required('Pizza size is required'),
    Pepperoni: yup.boolean(),
    Sausage: yup.boolean(),
    Bacon: yup.boolean(),
    Chicken: yup.boolean(),
    Onions: yup.boolean(),
    Olives: yup.boolean(),
    Pineapple: yup.boolean(),
    Cheese: yup.boolean()
})

export default Schema;