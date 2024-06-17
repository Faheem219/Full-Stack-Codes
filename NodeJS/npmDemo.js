// Uninstalled this package as it was insecure

// const jokes = require('give-me-a-joke');
// console.dir(jokes);
// jokes.getRandomDadJoke(function(joke){
//     console.log(joke);
// });

const colors = require("colors");
console.log("OMG A RAINBOW".rainbow);

// Requiring a global package:
// first running the following cmd in terminal while in the local node_modules dir: npm link <package name>
// Here: npm link cowsay
const cow = require('cowsay');
console.log(cow.say({
    text: "OMG ANOTHER RAINBOW".rainbow,
    e: "XX"
}));