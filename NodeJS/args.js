console.log("Hello from args file");
console.log(process.argv); // It will return the arguments passed in the terminal while executing using node
// the first will always be the node bin address and second will be the address of this file by default
// If anything else is passed at time of execution it will also be stored in the argv array

// greeter:
const args = process.argv.slice(2);
for(let arg of args){
    console.log(`Hi there, ${arg}`);
}