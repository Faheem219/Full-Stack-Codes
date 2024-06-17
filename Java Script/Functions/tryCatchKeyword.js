
// try {
//     hello.toUpperCase();
// } catch {
//     console.log("ERROR!!!!")
// }
// hello.toUpperCase();

// console.log("AFTER!")

// try/catch is used to catch any errors that may arise and stop them from crashing the program

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log("Please pass a string next time!")
    }
}