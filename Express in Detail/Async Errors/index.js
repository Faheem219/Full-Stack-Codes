const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const AppError = require('./AppError');

const Product = require('./models/product');
const { stat } = require('fs');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand2')
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
app.use(methodOverride('_method'))



const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res, next) => {
    try {
        const { category } = req.query;
        if (category) {
            const products = await Product.find({ category })
            res.render('products/index', { products, category })
        } else {
            const products = await Product.find({})
            res.render('products/index', { products, category: 'All' })
        }
    } catch (e) {
        next(e);
    }
})

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})

// This will throw error if name not entered since thats required, so resolve mongoose err using try & catch
app.post('/products', async (req, res, next) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`);
    } catch (e) {
        next(e);
    }
})

app.get('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            // throw new AppError('Product not found',404); // This will not work as errors dont work the same way inside 
            // async functions, we need to include another arg in route handler for next and pass the error in that next.

            return next(new AppError('Product Not Found', 404)); // If we dont return the below res.render() code 
            // will still be executed eventually
        }
        res.render('products/show', { product });
    } catch (e) {
        next(e);
    }
});

// Here this async function has a parent function which will do the error handling (preferred method 
// sometimes as no need to type try catch every time), This function is a UTILITY function
function wrapAsync(fn){ // fn refers to the whole async function below
    return function(req,res,next){
        fn(req,res,next).catch(e => next(e)); 
    }
}
app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) return next(new AppError('Product not found', 404));
    res.render('products/edit', { product, categories });

}));

app.put('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
}));

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
});

const handleValidationErr = err =>{
    console.dir(err);
    return new AppError(`Validation failed....${err.message}`,400);
}
// Every mongoose err has a name; so this middleware will log that name, there are diff. types of mongoose errors
app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name === 'ValidationError') err = handleValidationErr(err); // If the err is this part. mongoose err
    next(err);
})

app.use((err, req, res, next) => {
    const { status = 500 } = err;
    res.status(status).send(err.message);
});

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!");
});