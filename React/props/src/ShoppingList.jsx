// function ShoppingList({items}){
//     return (
//         <ul> {/* The misssing key prop error is solved by adding a unique key to each li using _id */}
//             {items.map((i) => (
//                 <li style={{color: i.completed ? "grey" : "red", 
//                 textDecoration: i.completed?"line-through":"none"}} key={i.id}>
//                     {i.item} - {i.quantity}
//                 </li>
//             ))}
//             {/* The logic inside map is kinda big & complicated so moving it to a new component */}
//         </ul>
//     );
// }

import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({items}){
    return (
        <ul>
            {items.map((i)=>(
                <ShoppingListItem key={i.id} {...i}/> 
            ))} {/* Using the spread operator to pass the individual values since the paramaters have same name */}
        </ul>
    );
}


export default ShoppingList;