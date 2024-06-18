import { useState } from "react";
// import ShoppingListForm from "./ShoppingListForm";
import {v4 as uuid} from "uuid";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";

function ShoppingList(){
    const [items, setItems] = useState([{id: uuid(), product: "Bananas", quantity: 8}, {id: uuid(), product:"Eggs", quantity: 12}]);

    const addItem = (item) => {
        setItems((currItems) => {
            return [...currItems, {...item, id: uuid()}];
        })
    }

    return (
        <div>
            <ul>
                {items.map((i)=>(
                    <li key={i.id}>
                        {i.product} - {i.quantity}
                    </li>
                ))}
            </ul>
            {/* <ShoppingListForm addItem={addItem}/> */}
            <ValidatedShoppingListForm addItem={addItem}/>
        </div>
    );
}

export default ShoppingList;