import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import ShoppingList from "./ShoppingList";

const data = [
  {id:1, item: "eggs", quantity: 12, completed: false},
  {id:2, item: "milk", quantity: 1, completed: true},
  {id:3, item: "chicken breasts", quantity: 3, completed: true},
  {id:4, item: "carrots", quantity: 6, completed: false}
];

function App() {

  return (
    <>
      <Heading color="cyan" text="Welcome!" fontSize="30px"/>
      <Greeter person="Bill"/> {/* This is how we pass a prop to a component, there can be multiple */}
      <Greeter person="Todd" from="Faheem"/> {/* For multiple props, write like HTML w/o commas */}

      <Die numSides={12}/> {/* To pass a non string argument use {} */}
      <Die numSides={20}/>
      <Die/> {/* For a default value */}

      <ListPicker values={[1,2,3,4,5,6]}/> {/* Passing an array */}

      <h2>Conditionals</h2>
      <DoubleDice/>

      <h2>Rendering Array Ele by Ele</h2>
      <ColorList colors={['red','green','cyan']}/>

      <h2>Shopping List</h2>
      <ShoppingList items={data}/>
    </>
  );
}

export default App
