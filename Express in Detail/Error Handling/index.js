const express = require('express');
const app = express();
const morgan = require('morgan');

// Defining our own Error class:
const AppError = require('./AppError');

app.use(morgan('tiny')); 

app.use((req,res,next)=>{
    req.requestTime = Date.now() 
    console.log(req.method, req.path);
    next();
});

app.use('/dogs', (req,res,next)=>{ 
    console.log("I love dogs");
    next();
});

const verifyPassword = (req,res,next)=>{
    const {password} = req.query;
    if(password==='chickennugget'){
        next();
    }
    /* res.send('sorry you need a password');
    res.status(401);
    throw new Error('Password Required') // We can also throw errors using this, this will also be treated
    // the same as any other error by express and it will send all the default stuff */

    // Using our own error class:
    throw new AppError('Password Required',401);
}



app.get('/', (req,res)=>{
    console.log(req.requestTime);
    res.send('Home page');
});

app.get('/error',(req,res)=>{
    chicken.fly(); // This will send an error message with code 500 which was made by default by express
})

app.get('/secret',verifyPassword,(req,res)=>{
    res.send('My secret is lol');
});

app.get('/dogs',(req,res)=>{
    res.send('woof woof');
});

// Writing our own Error Handling Middleware, has to be written at the bottom of all route handlers:
// Although this will disable all the default express error handling stuff BUT:
/*
app.use((err,req,res,next)=>{
    console.log("*******************************************");
    console.log("************    ERROR      ****************");
    console.log("*******************************************");
    //res.status(500).send('OHHHH NOOOOOO');
    next(err); // if next(err) is called then the next error handling middleware (here, default one) also kicks in
    //next(); But if we just call next() it will go to the next non-error handling middleware
})
*/

app.use((err,req,res,next)=>{
    // The variable status is not by default in err, it only exists cuz of our AppError class 
    const {status = 500} = err; // Setting default values, message is by default in error class
    res.status(status).send(err.message);
});

app.listen(3000, () =>{
    console.log('At 3000');
});