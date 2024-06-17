import { useState } from "react";
import {getRolls, sum} from "./utils";
import Dice from "./Dice";
import Button from "./Button";

// function LuckyN({numDice=2, goal =7}){ // Setting default values

//     const [dice, setDice] = useState(getRolls(numDice));
//     const isWinner = sum(dice) === goal;
//     const roll = () => setDice(getRolls(numDice));
//     return (
//         <main className="LuckyN">
//             <h1>Lucky{goal} {isWinner && "You Win!"}</h1>
//             <Dice dice={dice}/>
//             <button onClick={roll}>Re-Roll Dice</button>
//         </main>
//     );
// }

// REVISED VERSION (PASSING FUNCTION AS ARGUMENT):

// function LuckyN({title="Dice Game" ,numDice=2, winCheck}){ // Setting default values

//     const [dice, setDice] = useState(getRolls(numDice));
//     const isWinner = winCheck(dice);
//     const roll = () => setDice(getRolls(numDice));
//     return (
//         <main className="LuckyN">
//             <h1>{title} {isWinner && "You Win!"}</h1>
//             <Dice dice={dice}/>
//             <button onClick={roll}>Re-Roll Dice</button>
//         </main>
//     );
// }

// REV 2nd (PASSING FUNCTION AS ARGUMENT THAT ALSO UPDATES STATE):
// We can pass the state function as a prop, it will still update the state

function LuckyN({title="Dice Game" ,numDice=2, winCheck}){ // Setting default values

    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice);
    const roll = () => setDice(getRolls(numDice));

    return (
        <main className="LuckyN">
            <h1>{title} {isWinner && "You Win!"}</h1>
            <Dice dice={dice}/>
            <Button clickFunc={roll} label="Re-Roll Dice"/>
        </main>
    );
}

export default LuckyN;