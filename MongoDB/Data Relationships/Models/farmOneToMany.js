const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
.then(()=>{
    console.log("Connection open");
})
.catch(err=>{
    console.log("Connection Error: ",err);
});

// ONE TO MANY Relationships:
const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring','Summer','Fall','Winter']
    }
});
const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}] // This will add the object IDs of the products
    // here, ref is crucial for populate function
});

const Product = mongoose.model('Product',productSchema);
const Farm = mongoose.model('Farm',farmSchema);

const makeFarm = async () =>{
    const farm = new Farm({name: 'Full Belly Farms', city: 'Guinda, CA'});
    const melon = await Product.findOne({name: 'Goddess Melon'});
    farm.products.push(melon); // This will actually just push the id into farms rather than the whole thing
    await farm.save();
}

const addProduct = async()=>{
    const farm = await Farm.findOne({name: 'Full Belly Farms'});
    const watermelon = await Product.findOne({name: 'Sugar Baby Watermelon'});
    farm.products.push(watermelon);
    await farm.save();
}

const init = async()=>{
    await Farm.deleteMany({});
    await Product.deleteMany({});
    await Product.insertMany([
        {name: 'Goddess Melon', price: 4.99, season: 'Summer'},
        {name: 'Sugar Baby Watermelon', price: 5.99, season: 'Summer'},
        {name: 'Asparagus', price: 3.99, season: 'Spring'}
    ]);
    await makeFarm();
    await addProduct();
    await Farm.findOne({name: 'Full Belly Farms'}).then(farm=>console.log(farm));
    mongoose.connection.close();
}

// init();

// If we want mongoose to actually completely fill the data and not just the reference of products inside farms:
// NOTE: This only happens in mongoose aka here, the farm object returned by mongoose, the database 
// in mongoDB will not change and will still store just the references of products
const Populate = async()=>{
    await Farm.deleteMany({});
    await Product.deleteMany({});
    await Product.insertMany([
        {name: 'Goddess Melon', price: 4.99, season: 'Summer'},
        {name: 'Sugar Baby Watermelon', price: 5.99, season: 'Summer'},
        {name: 'Asparagus', price: 3.99, season: 'Spring'}
    ]);
    await makeFarm();
    await addProduct();
    await Farm.findOne({name: 'Full Belly Farms'}).populate('products').then(farm=>console.log(farm));
    mongoose.connection.close();
}

Populate();