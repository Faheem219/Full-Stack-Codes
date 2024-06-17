const myMath = {
    PI: 3.14159,
    square: function(num) {
        return num * num;
    },
    cube(num) { // This is the shorthand property of defining a method, above one is normal way
        return num ** 3;
    }
}

// A method is a function that has been added as a property for an object (very similar to classes in C++)

// this keyword is used to access the variables created in this object itself
const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWW`);
    }
}

const meow2 = cat.meow;