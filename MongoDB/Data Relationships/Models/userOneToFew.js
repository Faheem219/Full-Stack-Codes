const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
.then(()=>{
    console.log("Connection open");
})
.catch(err=>{
    console.log("Connection Error: ",err);
});

// ONE TO FEW Relationship (Embed data directly in the document): 1 User few addresses:
const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [ // Mongoose will treat this object also as a new Schema and by default define an id
        { // for it as well as the whole actuall whole schema itself
            _id: {_id: false}, // To stop id generation for this inner schema
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
});

const User = mongoose.model('User',userSchema);

const makeUser = async () =>{
    await User.deleteMany({});
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    });
    u.addresses.push({
        street: '123 Sesame St.',
        city: 'New york',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save();
    console.log(res);
    addAddress(res._id);
}

const addAddress = async(id)=>{
    User.deleteMany({});
    const user = await User.findById(id);
    user.addresses.push({
        street: '99 3rd St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await user.save();
    console.log(res);
    mongoose.connection.close();
}

makeUser();