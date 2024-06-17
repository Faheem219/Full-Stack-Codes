// Deining our own import statement
import Greeter from "./Greeter";
// import {Greeter, etc.} if the export is not default
import LoginForm from "./LoginForm";
import DiceRoll from "./DiceRoll";

// The first letter should be uppercase
function Dog(){
  return <p>WOOF!!!!</p>
}

function App() {
  return (
    <div className="App"> {/*In JSX class (as its reserved for JS) cannot be used so, className is used*/}
      <Greeter/>
      <LoginForm/>
      <Dog/>
      <Dog/>
      <DiceRoll/>
      <Dog/>
      <Dog/>
    </div>
  );
}

export default App;