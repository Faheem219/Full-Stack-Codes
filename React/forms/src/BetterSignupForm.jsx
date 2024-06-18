import { useState } from "react";

function BetterSignupForm(){
    const [formData, setFormData] = useState({firstName: "", lastName: "", password: ""});
// This is a better code for expandability and reusability
    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;

        setFormData(currData => {
            // currData[changedField] = newValue;
            // return {...currData};
            // Using Computed Property Name syntax:
            return {
                ...currData,
                [changedField]: newValue
            };
        });
    }

    const handleSumbit = () => {
        console.log(formData.firstName, formData.lastName);
    }

    return (
        <div>
            <label htmlFor="firstname">Enter firstname</label> 
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} id="firstname" placeholder="firstname"/>
            <label htmlFor="lastname">Enter lastname</label> 
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} id="lastname" placeholder="lastname"/>
            <label htmlFor="password">Enter password</label> 
            <input type="password" name="password" value={formData.password} onChange={handleChange} id="password" placeholder="password"/>

            {/* The name attribute here should exactly match the field in the class object */}
            <button onClick={handleSumbit}>Submit</button>
        </div>
    );
}

export default BetterSignupForm;