const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

const Product = require('./models/product');
const Farm = require('./models/farm');

mongoose.connect('mongodb://127.0.0.1:27017/farmStandTake2')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


// =================
// FARM ROUTES
// =================

app.get('/farms', async(req,res)=>{
    const farms = await Farm.find({});
    res.render('farms/index', {farms});
})

app.get('/farms/new', (req,res)=>{
    res.render('farms/new');
});

app.get('/farms/:id', async(req,res)=>{
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show',{farm});
});

// Deleting a farm and all its associated products using mongoose middleware
app.delete('/farms/:id', async (req,res)=>{
    const farm = await Farm.findByIdAndDelete(req.params.id); // This actually runs the middleware: findOneAndDelete()
    // We are goind to set up the middleware in the FARM Schema file
    res.redirect('/farms');
})

app.post('/farms', async (req,res)=>{
    const farm = new Farm(req.body);
    await farm.save();
    res.redirect('/farms');
});

app.get('/farms/:id/products/new',async(req,res)=>{
    const {id} = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new',{categories,farm});
});

app.post('/farms/:id/products', async(req,res)=>{
    const {id} = req.params;
    const farm = await Farm.findById(id);
    const {name, price, category} = req.body;
    const product = new Product({name,price,category});
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    // res.send(farm); // Here mongo will auto populate cuz all the data is just here it didnt have to fetch
    // anything, when we have to fetch data we will have to manually populate
    res.redirect(`/farms/${farm._id}`);
})



// =================
// PRODUCT ROUTES
// =================

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
})

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('farm','name');
    res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})



app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})


