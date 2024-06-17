function handleFormSubmit(evt){
    evt.preventDefault();
    console.log("Submitted the form");
}

export default function Form(){
    return (
        <form onSubmit={handleFormSubmit}> {/* The event object will be automatically passed just like JS */}
            <button>Submit</button>
        </form>
    )
}