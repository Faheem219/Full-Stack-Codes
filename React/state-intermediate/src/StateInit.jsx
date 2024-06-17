import { useState } from "react";

function generateGameBoard(){
    console.log("Definitely for sure making the inital game board")
    return Array(5000);
}

export default function Dumbo(){
    // const [board, setBoard] = useState(generateGameBoard()); // Here, we are calling/executing the 
    // initializer function inside useState, now react will ignore the value inside useState but here,
    // the function will still run during next render, so just pass value instead of executing
    const [board, setBoard] = useState(generateGameBoard);

    return (
        <div>
            <button onClick={()=>setBoard("hello")}>Click me to change state</button>
        </div>
    );
}