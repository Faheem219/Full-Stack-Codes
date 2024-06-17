const mongoose = require('mongoose');
const Product = require('./product');
const {Schema} = mongoose;

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name!']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email required']
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

// The pre middleware will not have access to the deleted farm, whereas the post middleware will
// The below is whats known as a QUERY MIDDLEWARE, another type is Document Middleware.
farmSchema.post('findOneAndDelete', async function(farm){
    if(farm.products.length){
        const response = await Product.deleteMany({_id: {$in: farm.products}}) // As we know this will
        // not contain delete data just acknowledgement
        console.log(response);
    }
})

const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;