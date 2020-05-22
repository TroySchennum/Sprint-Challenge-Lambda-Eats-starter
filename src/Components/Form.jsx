import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

const initialPizzaList = [
    {
        id: uuid(),
        name: 'pepperoni pizza',
        size: 'small',
        toppings: 'pepperoni',
        info: '',
    },
]


const initialFormValues = {
    name: '',
    size: '',
    toppings: '',
    info: '',
}


const Form = (props) => {
    const [formValues, setFormValues] = useState(initialPizzaList)

    const [formData, setFormData] = useState({})
    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }
    const onSubmit = evt => {
        evt.preventDefault();
        console.log(formData)
        setFormData({
            name: '',
            size: '',
            toppings: '',
            info: '',
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Name:&nbsp;<input type='text' name='name' value={formData.name} onChange={handleChange} /></label>
            <label>Size:&nbsp;<select name='size' value={formData.size} onChange={handleChange}>
                <option value='' >Select Size</option>
                <option value='small'>small</option>
                <option value='medium'>medium</option>
                <option value='large'>large</option>
                <option value='extra large'>extra large</option>
            </select></label>
            <label>pepperoni:&nbsp;<input type='checkbox' name='toppings' value={formData.toppings} onChange={handleChange} /></label>
            <label>sausage:&nbsp;<input type='checkbox' name='toppings' value={formData.toppings} /></label>
            <label>bacon:&nbsp;<input type='checkbox' name='toppings' value={formData.toppings} /></label>
            <label>green peppers:&nbsp;<input type='checkbox' name='toppings' value={formData.toppings} /></label>
            <label>Additional Info:&nbsp;<input type='text' name='info' value={formData.info} onChange={handleChange} /></label>
            <button>Submit</button>
        </form>
    )
}
export default Form