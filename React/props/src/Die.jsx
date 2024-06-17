export default function Die({numSides = 6}){    {/* Add a default value while destructuring */}
    let roll = Math.floor(Math.random() * numSides) + 1;
    return <p>{numSides} Sided die Roll: {roll}</p>
}