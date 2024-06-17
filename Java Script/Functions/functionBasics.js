function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

function rollDie(maxNum){
    return Math.floor(Math.random()*maxNum)+1;
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

// if a parameter is not passed while calling a function, JS will return UNDEFINED

repeat("hello",5);
console.log(add(5,4));
console.log(rollDie(6));
console.log(rollDie(6));
console.log(rollDie(6));
greet("Mike","Tyson");

// FUNCTION EXPRESSIONS: (functions are actually objects behind the scenes, so we can store them in variables)

// function add(x, y) {
//     return x + y;
// }

const add = function (x, y) {
    return x + y;
}

