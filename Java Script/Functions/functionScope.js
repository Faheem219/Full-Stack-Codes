// ==============
// FUNCTION SCOPE
// ==============
let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);

const bird = 'Scarlet Macaw';
function birdWatch() {
    const bird = 'Great Blue Heron';
    console.log(bird);
}
birdWatch()

// ==============
// BLOCK SCOPE (Block means anything enclosed within {} escluding functions)
// ==============
// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159; // Let and const have block level scope
//     let msg = 'HIII!'  // These both cannot be accessed outside this block
// }
// console.log(radius);
// console.log(msg)

// for (var i = 0; i < 5; i++) {  // Var does not just have block level scope, so i can be accessed even
//     let msg = "ASKLDJAKLSJD";  // outside this block of code even after the loop ended.
//     console.log(msg)
// }
// console.log(msg)
// console.log(i)

// ==============
// LEXICAL SCOPE (The inner nested function has access to all variables defined in its outer parent function,
// ============== same not true for vice-versa)

function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
    function cryForHelp() {
        let color = 'purple';
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}