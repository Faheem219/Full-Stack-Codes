const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/shopApp') // This returns a promise
.then(()=>{
    console.log("Connection open!");
})
.catch(e=>{
    console.log("Oh no error: ",e);
})

// This is actually the shorthand method to create a schema:
// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
// })
// This is the proper version:
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // This is a constraint
        maxlength: 20
    },
    price: {
        type: Number, // If a string is entered then error
        min: [0,'Price must be positite you dumbo'] // Adding a custom error message
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online:{
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S','M','L'] // The data can only contain one of these options
    }
});

// Instance methods are methods that work on a particular instance of the mongoose model, ie, bike
// Static methods work on the whole model itself, ie, Product. 
// User defined Instance methods (Should be defined before creating an instance):
productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale; // Here this refers to a specific instance of the model
    return this.save() // This will take time, so we are returning it and awaiting it in the calling function
    // basically it is a THENABLE
}

productSchema.methods.addCategory = function(newCat){
    this.categories.push(newCat);
    return this.save();
}

// Static methods (Here, this refers to the model itself rather than an instance):
productSchema.statics.fireSale = function(){
    return this.updateMany({},{onSale: true, price: 0});
}

const Product = mongoose.model('Product',productSchema);

const bike = new Product({name: 'Mountain Bike',price: 599, categories: ['Cycling','Safety'], size: 'S'}); 
// Any additional stuff included here will be ignored
bike.save()
.then(data=>{
    console.log('Data added: ',data);
})
.catch(e=>{
    console.log('Error! ',e);
});

// The validations only apply while creating not while updating, for that you have to set more options:
Product.findOneAndUpdate({name: 'Mountain Bike'},{price: 699},{new:true, runValidators:true})
.then(data=>{
    console.log('Data updated: ',data);
})
.catch(e=>{
    console.log('Error! ',e);
});

const findProduct = async() =>{
    const foundProduct = await Product.findOne({name: 'Mountain Bike'});
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct);
}

findProduct();

Product.fireSale().then(res=>console.log(res));