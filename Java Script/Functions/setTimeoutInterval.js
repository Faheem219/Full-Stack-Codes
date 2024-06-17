// it takes a function as a parameter, and the time after which the function is to be executed after 
// the site has been loaded
console.log("HELLO!!!...")
setTimeout(() => {
    console.log("...are you still there?")
}, 3000) // 3000ms

console.log("GOODBYE!!") // This will run before "...are you still there?"

// it takes a function as a parameter and time, so in this case it will keep executing the function
// after every 2 seconds.
const id = setInterval(() => { // id is used to seperately identify every setInterval() function that is being run in the program
    console.log(Math.random())
}, 2000); // 2000ms

// clearInterval(id); This will stop the setInterval() function that has this id