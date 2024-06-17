const express = require('express');
const app = express();
const morgan = require('morgan');

// morgan('tiny'); // this is a function that needs to be used on every single request for morgan middleware
// just like express.json or express.urlencoded

app.use(morgan('tiny')); // app.use will run everytime a request is received
// Morgan is used to log info to the console about every request eg: GET /dogs 304 - - 2.147 ms

/*
app.use((req,res)=>res.send('HIJACKED LOLOLOL')); This will terminate every request here only as it is not
calling any other middleware using next() and also res.send will stop a request even if next() is included


app.use((req,res,next)=>{
    console.log('This is my first middleware!');
    next(); // Any statements below this will be executed after every method in nex() has been executed
    console.log('This is first after execution');
});
app.use((req,res,next)=>{
    console.log('This is my second middleware!');
    return next(); // If we are returning it then the function ends at return call
    console.log('This is second after execution');
});
*/

app.use((req,res,next)=>{
    //req.method = 'GET'; // This will convert every single request into a GET req even for other methods
    req.requestTime = Date.now() // Adding a attribute to the req object for all methods even route handlers
    console.log(req.method, req.path);
    next();
});

// This middleware will only run for any request of /dogs doesnt matter the type GET, POST, etc.
app.use('/dogs', (req,res,next)=>{ 
    console.log("I love dogs");
    next();
});

// Password using middleware, but this is protecting all routes and every single request
// app.use((req,res,next)=>{
//     const {password} = req.query;
//     if(password === 'chickennugget '){next();}
//     res.send('Sorry you need a password'); // if password not correct, the process will terminate here
// })

// To implement this for a specific route, we first define it and add it to the argument of its route handler:
const verifyPassword = (req,res,next)=>{
    const {password} = req.query;
    if(password==='chickennugget'){
        next();
    }
    res.send('sorry you need a password');
}



app.get('/', (req,res)=>{
    console.log(req.requestTime);
    res.send('Home page');
});

// This is calling a middleware verifyPassword first:
app.get('/secret',verifyPassword,(req,res)=>{
    res.send('My secret is lol');
});

app.get('/dogs',(req,res)=>{
    res.send('woof woof');
});

// Since the order matters, if no route matches then this will execute and it will end the code
app.use((req,res)=>{
    res.status(404).send('Not Found!'); // This will modify the http status code to 404 and send the message
});

app.listen(3000, () =>{
    console.log('At 3000');
});