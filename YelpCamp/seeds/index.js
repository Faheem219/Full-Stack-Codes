const mongoose = require('mongoose');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');
const Campground = require('../models/campground');
const Review = require('../models/review');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connection");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    await Review.deleteMany({});
    for(let i = 0; i < 50; i++){
        const random1000 = Math.floor(Math.random() * 1000) + 1;
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '6672c89aa898690e2be3e92d',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUTO-FGJoQEpC8rziKMrOXEr0fH7dmYBCjg&s',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima praesentium explicabo eius repellendus voluptatum odio ut quis eos iusto hic, amet ratione exercitationem assumenda ullam, ab dignissimos. Amet, eos ratione.',
            price 

        });
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});