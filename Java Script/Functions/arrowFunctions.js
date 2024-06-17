// const add = function(x,y) {
//     return x + y;
// }

// const add = (x, y) => { this allows us to write function expressions without using the function keyword,
//     return x + y;  its just a more compact way of writing functions
// }

const square = num => { // if there's a single parameter theres no need for brackets
    return num * num;
}

// IMPLICIT RETURNS (If only a returning action is to be performed then () can be used instead of {} 
// and no need to write the return keyword, it will implicitly return the value inside it):

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

const square2 = num => num*num;

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })

// MAP USING IMPLICIT RETURN ARROW FUNCTION
const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))

// THIS IN ARROW FUNCTIONS:
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            // keyword 'this' in arrow functions refers to the value of 'this' when the function is created
            // ie it refers to object of its parent function, and if there is no parent function 
            // then it refers to the extreme parent window object
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}