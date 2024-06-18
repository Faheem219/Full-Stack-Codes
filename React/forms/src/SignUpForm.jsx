import { useState } from "react";

function SignUpForm(){
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    const updateFirstname = (evt) => {
        setFirstname(evt.target.value); // The target refers to the input element
        // React has full control over this element, everytime it changes, its re-rendered and the variable
        // here ie username is always updated with the correct value
    }

    const updateLastname = (evt) => {
        setLastname(evt.target.value);
    }

    const handleSumbit = () => {
        console.log(firstname, lastname);
    }

    return (
        <div>
            <label htmlFor="firstname">Enter firstname</label> {/* since for is reserved in JS, htmlFor is used */}
            <input type="text" placeholder="firstname" value={firstname} onChange={updateFirstname} id="firstname"/>
            <label htmlFor="lastname">Enter lastname</label>
            <input type="text" placeholder="lastname" value={lastname} onChange={updateLastname} id="lastname"/>
            <button onClick={handleSumbit}>Submit</button>
        </div>
    )
}

export default SignUpForm;