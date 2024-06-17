const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
//mongoose.connect('mongodb://localhost:27017/movieApp')
mongoose.connect('mongodb://127.0.0.1:27017/movieApp') // This returns a promise
.then(()=>{
    console.log("Connection open!");
// BTW to run mongoose code no need to chain here, it automatically will run the code even when the connection
// is not fully established
})
.catch(e=>{
    console.log("Oh no error: ",e);
})

// To make a model (kind of a collection) we have to first describe it which is knoown as Schema:

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

// This will create a model named Movie following the movieSchema (The name has to follow these rules:
// first letter should be uppercase and it should be singular), this model will now create a collection
// named movies, it will make the first letter of model name lowercase and pluralize it.
// This will return a class object:
const Movie = mongoose.model('Movie',movieSchema);

// Entering an entry in the movies collection in mongo:
// const amadeus = new Movie({title: 'Amadeous', year: 1986, score:9.2, rating: 'R'});
// amadeus.save() // To save the element
// amadeus.score=9.5;
// amadeus.save() // To save the changes

// To add multiple entries/elements:
// Movie.insertMany([ // This method will return a promise
//     {title: 'Amelie',year:2001,score:8.3,rating:'R'},
//     {title: 'Alien',year:1979,score:8.1,rating:'R'},
//     {title: 'The Iron Giant',year:1999,score:7.5,rating:'PG'},
//     {title: 'Stand By Me',year:1986,score:8.6,rating:'R'},
//     {title: 'Moonrise Kingdom',year:2012,score:7.3,rating:'PG-13'},
// ])
// .then(data=>{
//     console.log('Successful: ',data);
// })
// .catch(e=>{
//     console.log('Error! ',e);
// });

// To find data, this method will return a query object, it is not a promise but it is a THENABLE object:
Movie.find({}).then(data=>console.log('Here is your data: ',data));
Movie.find({rating: 'PG-13'}).then(data=>console.log('Movies with PG-13 rating: ',data));
Movie.findOne({}).then(data=>console.log('First movie: ',data));
Movie.findById('666bdd989cec70f81c57a14d').then(data=>console.log('Finding by ID: ',data)); // Find By ID
// If you want a proper promise then use the .exec function also which returns a proper promise, for eg:
// Movie.findOne({}).then(data=>console.log('First movie: ',data)).exec();

// To update an element (it will not return updated element, it will return acknowledgement):
Movie.updateOne({title: 'Amadeous'},{year:1984}).then(res=>console.log(res)); 
Movie.updateMany({title: {$in: ['Amadeous','Stand By Me']}}, {score: 10}).then(res=>console.log(res));
// The below will return the old data and not just the acknowledgement:
Movie.findOneAndUpdate({title: 'The Iron Giant'},{score: 7.0}).then(oldData=>console.log(oldData));
// The below will return the modified data:
Movie.findOneAndUpdate({title: 'The Iron Giant'},{score: 7.8},{new: true}).then(newData=>console.log(newData));

// To delete an element (will return just acknowledgement):
Movie.deleteOne({title: 'The Iron Giant'}).then(msg=>console.log(msg));
Movie.deleteMany({year:{$gte:1999}}).then(msg=>console.log(msg));
// To get the deleted data back:
Movie.findOneAndDelete({title: 'Alien'}).then(data=>console.log(data));