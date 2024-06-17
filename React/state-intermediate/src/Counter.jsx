import { useState } from "react";

export default function Counter(){
    const [num, setNum] = useState(0); 

    const addOne = () => {
        setNum(num+1); 
    }
/*    const addThree = () => {
        setNum(num+1); // This is problematic as we are depending on the previous state for the new value 
        setNum(num+1); // of the variable, so here this will not work as num is only updated when this
        setNum(num+1); // component is re-rendered ie the function is re-run
    } */

// This will fix the above issue (Always use when cur value of state dependent on prev value):
    const addThree = () =>{
        setNum(curCount => curCount+1); // React will automatically pass the num var here, so name doesnt matter
        setNum(curCount => curCount+1); // This will keep stacking on, but the value itself stil doesnt change here
        setNum(curCount => curCount+1); // After all the function calls are over, react will re-render (only once)
        // and then the stacked on operations are performed one by one
    }
    return (
        <div>
            <p>The count is: {num}</p> 
            <button onClick={addOne}>+1</button> 
            <button onClick={addThree}>+3</button> 
        </div>
    );
}