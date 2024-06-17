function handleClick(){
    console.log("You clicked it");
}

function handleHover(){
    console.log("You hovered over me")
}

export default function Clicker(){
    return (
        <div>
            <p onMouseOver={handleHover}>Hover Over Me</p>
            <button onClick={handleClick}>Click</button> {/* Have to handle events in React way ie HTML style
            while the name being JS style (lowerCamelCased) */}
        </div>
    )
}