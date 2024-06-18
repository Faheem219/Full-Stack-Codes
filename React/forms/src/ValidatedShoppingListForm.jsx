import { useState } from "react";

// VALIDATION FROM SCRATCH IS NOT SCALLABLE AT ALL, JUST ONE FIELD VALIDATION TAKES A LOT OF WORK

function ValidatedShoppingListForm({addItem}){
    const [formData, setFormData] = useState({product: "", quantity: 0});
    const [productIsValid, setProductIsValid] = useState(false);

    // const validate = () => {
    //     if(formData.product.length === 0){ // This will not work as formData will only update after 
    //         setProductIsValid(false); // the state has been re-rendered
    //     }else{
    //         setProductIsValid(true);
    //     }
    // }

    const validate = (product) => {
        if(product.length === 0){ // Instead take the values coming from evt
            setProductIsValid(false); 
        }else{
            setProductIsValid(true);
        }
    }

    const handleChange = (evt) => {
        if(evt.target.name==="product"){
            validate(evt.target.value);
        }

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
        if(productIsValid){
            addItem(formData);
            setFormData({product: "", quantity: 0});
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="product">Product</label>
            {!productIsValid && <p style={{color: "red"}}>Product name cannot be empty</p>}
            <input type="text" name="product" id="product" value={formData.product} onChange={handleChange} placeholder="product name"/>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" name="quantity" id="quantity" value={formData.quantity} onChange={handleChange} placeholder="1"/>
            <button>Add Item</button>
        </form>
    );
}

export default ValidatedShoppingListForm;