const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
.then(()=>{
    console.log("Connection open");
})
.catch(err=>{
    console.log("Connection Error: ",err);
});

// ONE TO BAJILIONS Relationship:
const userSchema = new Schema({
    username: String,
    age: Number
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

const User = mongoose.model('User',userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweets = async()=>{
    const user = new User({username: 'Chickenfan99', age: 61});
    const tweet1 = new Tweet({text: 'omg i love chickens', likes: 1 });
    tweet1.user = user; // This will just add the ObjectID and not the whole object
    await user.save();
    await tweet1.save();
}

const addTweets = async()=>{
    const user = await User.findOne({username: 'Chickenfan99'});
    const tweet2 = new Tweet({text: 'bock bock bock my chickens make noises', likes:69420});
    tweet2.user = user;
    await tweet2.save();
}

const init = async()=>{
    await Tweet.deleteMany({});
    await User.deleteMany({});
    await makeTweets();
    await addTweets();
    mongoose.connection.close();
}

// init();

// Populating function:
const Populate = async()=>{
    await Tweet.deleteMany({});
    await User.deleteMany({});
    await makeTweets();
    await addTweets();
    const t = await Tweet.findOne({}).populate('user','username') // This will populate only the username
    // property inside the tweet collection
    console.log(t);
    mongoose.connection.close();
}

Populate();