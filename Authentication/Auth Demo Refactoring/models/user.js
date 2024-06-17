const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank']
    }
});

// Remember: Static method will be added to the User model itself, and not any instance of it
userSchema.statics.findAndValidate = async function(username, password){
    const foundUser = await this.findOne({username});
    const isValid = await bcrypt.compare(password, foundUser.password);
    return isValid?foundUser:false;
}

// Using mongoose middleware to hash and store password
// Lets say only username is being modified and saved, so this middleware need not run, so isModified is used:
userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

module.exports = mongoose.model('User', userSchema);