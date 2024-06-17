// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }
// arguments is a kind of array that stores all the arguments passed during a function call 
// except its not really an array and doesnt have any methods associated with it

// COLLECT THE "REST" IN NUMS:
function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}


function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}
