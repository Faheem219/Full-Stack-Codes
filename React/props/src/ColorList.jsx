export default function ColorList({ colors }) {
  {/* For an array of components, each component of that array will be rendered seperately sequentially
    Eg: const compArray = [<h1><Hello/h1>, <h2>How are you</h2>, etc.] 
    return (
      {compArray}
  );
  */}
  return (
    <div>
      <p>Color List</p>
      <ul> {/* Using map to render each element of array in a li */}
        {colors.map((c) => (
          <li style={{color: c}}>{c}</li>
        ))}
      </ul>
    </div>
  );
}