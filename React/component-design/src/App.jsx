import LuckyN from "./LuckyN";
import { sum } from "./utils";
import BoxGrid from "./BoxGrid";

// winCheck functions: We can customize the game according to any logic rather than just sum=7
function lessThan4(dice){
  return sum(dice)<4;
}

function allSameValue(dice){
  return dice.every(v => v===dice[0] ); // Will check all values
}

function App() {

  return (
    <>
      {/* <LuckyN/> */}
      {/* <LuckyN numDice={3} goal={11}/> */}
      <LuckyN winCheck={lessThan4} title="Less Than 4"/>
      <LuckyN winCheck={allSameValue} numDice={3}/>
      <BoxGrid/>
    </>
  );
}

export default App
