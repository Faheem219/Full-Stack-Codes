import "./Die.css"

function Die({val, color = "slateblue"}) { // Default value for color
    return <div className="Die" style={{backgroundColor: color}}>{val}</div>
}

export default Die;