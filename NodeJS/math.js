const add = (x,y) => x+y; // module.exports.add = (x,y) => x+y; This also works

const PI = 3.14159;

const square = x => x*x;

const math = {
    add: add,
    PI: PI,
    square: square
};
module.exports = math;
// module.exports.add = add;
// module.exports.PI=PI;
// module.exports.square=square;

// This is also valid if exports has not been redefined anywhere in the file 
// (exports refers to module.exports by default)
// exports.square=square;
// exports.PI=PI;