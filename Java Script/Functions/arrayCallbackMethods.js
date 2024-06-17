// =====================
//  FOR EACH (it will iterate over all items in the array)
// =====================

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
    }
})

// forEach can also be used on array of object:
const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 65
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

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})

// =====================
//   MAP (it will iterate and take the value being returned in the function and map a new array using that)
// =====================

const doubles = numbers.map(function (num) {
    return num * 2;
})

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})

// =====================
//   FILTER (It will iterate create a new array with elements that pass the test implemented by function)
// =====================
// It will NOT MODIFY the original array

numbers.filter(n => {
    return n < 10
})

const badMovies = movies.filter(m => m.score < 70);

// const goodMovies = movies.filter(m => m.score > 80)
// const goodTitles = goodMovies.map(m => m.title)

movies.filter(m => m.score > 80).map(m => m.title);

// =====================
//  EVERY / SOME (these are boolean methods, they return true or false)
// =====================

// every will return true if each and every element passes the test implemented by the function
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];
exams.every(score => score >= 75);

// some will return true is any element passes the test implemented by the function
movies.some(movie => movie.score > 95);

// =====================
//  REDUCE (it iterates and reduces an array to a single value)
// =====================

// SYNTAX: arr.reduce((accumulator, curVal) => <function>) accumulator accumulates all the values based
// on defined functions return value, whereas curVal is the current single value of the current iteration.

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total)

// const total = prices.reduce((total, price) => {
//     return total + price
// })

const total = prices.reduce((total, price) => total + price)

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})

// We can provide an initial value as the 2nd arg to reduce:
const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num) //20
evens.reduce((sum, num) => sum + num, 100) //120 || 100 will be used as initial value of sum (accumulator)