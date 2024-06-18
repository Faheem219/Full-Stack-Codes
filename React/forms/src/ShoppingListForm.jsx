import { useState } from "react";

function ShoppingListForm({addItem}){
    const [formData, setFormData] = useState({product: "", quantity: 0});

    const handleChange = (evt) => {
        const fieldName = evt.target.name;
        const newValue = evt.target.value;
        
        setFormData(oldData => {
            return {
                ...oldData,
                [fieldName]: newValue
            };
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
        setFormData({product: "", quantity: 0});
    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="product">Product</label>
            <input type="text" name="product" id="product" value={formData.product} onChange={handleChange} placeholder="product name"/>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" name="quantity" id="quantity" value={formData.quantity} onChange={handleChange} placeholder="1"/>
            <button>Add Item</button>
        </form>
    );
}

export default ShoppingListForm;