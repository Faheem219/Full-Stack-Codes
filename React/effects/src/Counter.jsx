import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [Name, setName] = useState("");

    // This will run after every render
    // useEffect(function myEffect(){
    //     console.log("myEffect was called");
    // })

    // This will run only if count changes:
    // useEffect(function myEffect(){
    //     console.log("myEffect is called");
    // }, [count]);

    // This will only run once after initial mount (first render):
    // Useful while loading an API for the first time
    useEffect(function myEffect(){
        console.log("myEffect is called");
    }, []);

    const increment = () => {
        setCount((c)=> c+1);
    };

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <p>Name: {Name}</p>
            <input type="text" value={Name} onChange={handleChange}/>
        </div>
    );
}