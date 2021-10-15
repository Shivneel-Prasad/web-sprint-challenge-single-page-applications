import * as yup from 'yup'

const Schema = yup.object().shape({
    customerName: yup
        .string()
        .trim()
        .required('Customer Name is Required ')
        .min(2, 'name must be at least 2 characters'),
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
    Cheese: yup.boolean(),
    specials: yup.string().notRequired()
})

export default Schema;