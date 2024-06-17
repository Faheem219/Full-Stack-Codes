import { useState } from "react";
import {v4 as uuid} from "uuid";

export default function EmojiClicker(){
    const [emojis, setEmojis] = useState([{id: uuid(), emoji:"🥳"}]);

    const addEmoji = () =>{
        setEmojis((oldEmojis) => [...oldEmojis, {id: uuid(), emoji: "😂"}]);
        // Since this is an array, have to use callback method of updation
    }

    const deleteEmoji = (id) => {
        // deleting emoji with specified id:
        setEmojis(prevEmojis => {
            return prevEmojis.filter(e=>e.id!==id); // Filter will return a copy of the array
        })
    }

    const makeEverythingHeart = () => {
        setEmojis(oldEmojis => {
            return oldEmojis.map((e) => {
                return {...e, emoji: "❤️"};
            });
        });
    }

    return (
        <div>
            {emojis.map((e)=>( // Here we have to use () instead of {}, {} requires return statement
                <span onClick={()=>deleteEmoji(e.id)} style={{fontSize: "4rem"}} key={e.id}>
                    {e.emoji}
                </span> 
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={makeEverythingHeart}>HEARTS!</button>
        </div>
    )
}