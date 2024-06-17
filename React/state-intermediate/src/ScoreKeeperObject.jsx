import { useState } from "react";

function ScoreKeeper(){
    const [scores, setScores] = useState({p1Score: 0, p2Score: 0});

/*    function increaseP1Score(){
        scores.p1Score++; // This will not work as the score object itself is checked for updation but,
        setScores(scores); // since an object is just a reference and that reference never changes so react
        // will not re-render here, for updation of an object we must pass a new object. SAME IS FOR ARRAY
    } */

    function increaseP1Score(){
        const newScores = {...scores} // This will create a copy of the object which has diff. mem. location
        newScores.p1Score++;
        setScores(newScores);
    }

    // The below also works:
    function increaseP2Score(){
        setScores((oldScores) => { // But here since we are dependent on old value we'll have to use the
            return {...oldScores, p2Score: oldScores.p2Score+1}; // callback method of setScores
        });
    }

    return (
        <div>
            <p>Player 1: {scores.p1Score}</p>
            <p>Player 2: {scores.p2Score}</p>
            <button onClick={increaseP1Score}>+1 Player 1</button>
            <button onClick={increaseP2Score}>+1 Player 2</button>
        </div>
    )
}

export default ScoreKeeper;