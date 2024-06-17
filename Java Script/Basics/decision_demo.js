console.log("BEFORE CONDITION");

let random=Math.random();
if(random<=0.5){
    console.log(`YOUR NUMBER IS ${random} WHICH IS LESS THAN 0.5!`);
}

console.log("AFTER CONDITION"); // semicolon is not necessary

// const dayOfWeek = prompt("Enter a day").toLowerCase();
const dayOfWeek="friday";

if(dayOfWeek=="monday"){
    console.log("UGHHH");
}
else if(dayOfWeek=="saturday"){
    console.log("YAYYY");
}
else if(dayOfWeek=="sunday") console.log("HMMMM"); // This is also allowed same as C or C++
else{
    console.log("BORRRINGG");
}

// NESTED STATEMENTS:
// To ask user for password, must be atleast 6 characters and contain no space:
const password = prompt("Enter a password");
if(password.length>=6){
    if(password.indexOf(' ')==-1) console.log("Valid Password!");
    else console.log("Invalid! REMOVE SPACE");
}
else console.log("Invalid! INCREASE SIZE");

// TRUTHY FALSY (Falsy: NaN, undefined, 0, false)
let userInput = prompt("Just enter something"); // APPARANTLY IT TAKES A STRING BY DEFAULT
if(userInput) console.log("YOU ENTERED TRUTHY");
else console.log("YOU ENTERED FALSY");

// LOGICAL OPERATORS ARE THE SAME AS C / C++ 
// Switch statements are also same