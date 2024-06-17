const express = require('express');
const app = express();
//console.dir(app);

// This is running just locally on port 3000, to view this go to the website: localhost:3000
// This server is running locally on this machine only
// This port is just a address where this server is running, to run another server choose another port
app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});

// While receiving a request, express automatically gives us two JS objects by parsing the incoming
// http request: request and response
// At a time we can only respond to one request once, there cannot be multiple responses
// app.use((req, res)=>{
//     console.log("We got a new request");
//     //res.send("Hello we got your request, this is a response");
//     //res.send({color: 'red'});
//     res.send('<h1>This is my webpage!</h1>');
// });

// /cats => 'meow'
// /dags => 'woof'
// '/' : This is known as the root route / homepage

// The below are known as route handlers:
// app.get is used to reply to get requests only
app.get('/cats',(req,res)=>{
    res.send("MEOW!!!");
});

app.post('/cats',(req,res)=>{
    res.send('Post request received to /cats!');
});

app.get('/dogs',(req,res)=>{
    res.send("WOOFF!!");
});

app.get('/',(req,res)=>{
    res.send("This is the homepage, welcome");
});

// To be able to respond to a parameterized path:
// if we instead do '/:subreddit it will respond to anything that starts with /
// Here, we respond to stuff that starts with /r/
app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit!</h1>`);
});

app.get('/r/:subreddit/:postId',(req,res)=>{
    const {subreddit, postId}=req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit!</h1>`);
});

// Responding to Query Strings (the user will not type this, it will happen when user clicks a html buuton, etc.):
app.get('/search',(req,res)=>{
    const {q} = req.query;
    if(!q) res.send("Nothing found if nothing searched!");
    res.send(`<h1>Search results for: ${q}</h1>`);
})

// A generic response for any route (always has to be at the bottom, as this will respond even to a valid 
// route otherwise)
app.get('*',(req,res)=>{
    res.send("I dont know what you're on buddy");
});