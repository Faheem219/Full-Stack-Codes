const express = require('express');
const app = express();
const session = require('express-session');

// Used to create a session, as this automatically sends a signed cookie need to include secret text:
const sessionOptions = {secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false};
app.use(session(sessionOptions));

app.get('/viewcount', (req,res)=>{
    if(req.session.count){ // Anything added in req.session will be stored (server side) by default in
// memory (not in a real database, just a javascript object, will leak) for every single indivual user
        req.session.count+=1;
    }else{
        req.session.count=1;
    }
    res.send(`You have viewed the page ${req.session.count} times`);
});

// req.session will store info on the ongoing session, if index is restarted all the data will be gone
// since we are not storing it in session data store and instead it is just in JS memory
app.get('/register', (req,res)=>{
    const {username = 'Anonymous'} = req.query;
    req.session.username = username;
    res.redirect('/greet');
});

app.get('/greet', (req,res)=>{
    const {username} = req.session;
    res.send(`Welcome back, ${username}`);
})


app.listen(3000, ()=>{
    console.log("At 3000");
});