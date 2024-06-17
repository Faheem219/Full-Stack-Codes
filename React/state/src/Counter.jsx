// export default function Counter({num}){
//     const incrementNum = () => (num+=1); {/* This will not work, it will not update the component
//     React will not automatically re-render the updated view, it doesnt know when to re-render */}
//     return (
//         <div>
//             <p>The count is: {num}</p>
//             <button onClick={incrementNum}>Increment</button>
//         </div>
//     );
// }

// States are used to fix the above problem:
import { useState } from "react";

export default function Counter(){
    const [num, setNum] = useState(5); {/* This function returns an array of a variable & a function 
    associated with the variable, also it has to be defined in a react component. The naming convention
    is <var> , set<Var> this is quite a strict convention */}
    // We have to pass the initial value of the state inside the useState function

    const changeNum = () => {
        setNum(num+1); // This will update the value of num for the next instance/render only
        console.log("setNum has run, ",num); // So, here value of num will be the old one only
    }
    return (
        <div>
            <p>The count is: {num}</p> {/* This is problematic */}
            <button onClick={changeNum}>Increment</button> {/* When changeNum is called, react will
            re- render the entire component, ie, Counter the whole function is run again, but useState is
            not run again, its like a static variable, its initialized only once */}
        </div>
    );
}