const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/shopApp') // This returns a promise
.then(()=>{
    console.log("Connection open!");
})
.catch(e=>{
    console.log("Oh no error: ",e);
})

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

// A virtual is a property that does not exist in the schema but behaves like it (its only on the JS side)
personSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.last}`;
});

// Mongoose middleware (It gives us the ability to run a program before or after an action, eg: if a
// person is deleted from an app then that users corresponding comments,etc. must also be deleted):
personSchema.pre('save',async function(){
    this.first = 'Yo';
    this.last = 'Mama';
    console.log("About to save");
})

personSchema.post('save',async function(){
    console.log("Just saved");
})

const Person = mongoose.model('Person',personSchema);

const tammy = new Person({first: 'Tammy',last: 'Chow'});
tammy.save().then(console.log(tammy.fullName)); // Waiting for it to save then printing it