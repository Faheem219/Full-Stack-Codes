import { useState } from "react";

function UsernameForm(){
    const [username, setUsername] = useState("");

    const updateUsername = (evt) => {
        setUsername(evt.target.value); // The target refers to the input element
        // React has full control over this element, everytime it changes, its re-rendered and the variable
        // here ie username is always updated with the correct value
    }

    return (
        <div>
            <label htmlFor="username">Enter a username</label> {/* since for is reserved in JS, htmlFor is used */}
            <input type="text" placeholder="username" value={username} onChange={updateUsername} id="username"/>
            <button>Submit</button>
        </div>
    )
}

export default UsernameForm;