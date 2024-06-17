const express = require('express');
const app = express();
const path = require('path');
const {v4: uuid} = require('uuid'); // For unique id
const methodOverride = require('method-override'); // For Patch, put requests

app.use(express.urlencoded({extended:true})); // For parsing the POST request (url encoded) body in the 
// form of a JS object
app.use(express.json()); // For parsing a JSON POST request body

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(methodOverride('_method')); // method can be set to put, patch, etc.

app.get('/tacos',(req,res)=>{
    res.send("GET /tacos response");
});

// For a post request:
// Parsing the request body (GET: req.query, POST: req.body):
app.post('/tacos',(req,res)=>{
    const {meat,qty} = req.body;
    res.send(`Ok, here are your ${qty} ${meat} tacos`);
});

/*
Just one Example of a RESTful resource (consider comment as a resource):
The base URL is chosen as the resource name but plural (so, here base url: /comments)
Following is a RESTful way of defining CRUD operations on this resource:

    NAME          PATH            VERB            PURPOSE

1) Index        /comments         GET        Display all comments
2) New      /comments/new         GET        Form to create new comment
3) Create       /comments         POST       Creates new comment on the server
4) Show       /comments/:id       GET       Details for one specific comment
5) Edit     /comments/:id/edit    GET       Form to edit specific comment
6) Update     /comments/:id      PATCH      Updates specific comment on server
7) Destroy    /comments/:id      DELETE     Deletes specific item on server
*/

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my pet named steve'
    },
    {
        id: uuid(),
        username: 'Dick Thunder',
        comment: 'lsf lfsd kglfk  fsfidj jff'
    },
    {
        id: uuid(),
        username: 'lolboi',
        comment: 'Dick thunder bro you ok?'
    }
]

// To INDEX all comments:
app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments});
});

// To CREATE a new comment:
// First a form will be given to user to enter data then it will be posted
app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
});

app.post('/comments',(req,res)=>{
    const {username, comment} = req.body;
    comments.push({username,comment,id: uuid()});
    //res.send("<h1>Comment Added Successfully!</h1>");
    res.redirect('/comments'); // This is by default a get request
    // We redirect because we dont want the user to continually refresh and 'confirm form resubmission'
});

// To SHOW a comment:
app.get('/comments/:id',(req,res)=>{
    const {id} = req.params;
    const comment = comments.find(c=>c.id===id); // To find the matching commment
    res.render('comments/show',{comment});
});

// To UPDATE a comment:
// The patch request is supposed to be used when patching (updating) a resource
// The put request returns a whole new resource body rather than just updating a value inside the body
app.patch('/comments/:id',(req,res)=>{
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c=>c.id===id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
});

app.get('/comments/:id/edit',(req,res)=>{
    const {id} = req.params;
    const comment = comments.find(c=>c.id===id);
    res.render('comments/edit',{comment});
});

app.listen(3000, ()=>{
    console.log("On Port 3000!");
});

// To DESTROY a comment:
app.delete('/comments/:id',(req,res)=>{
    const {id}=req.params;
    comments = comments.filter(c=>c.id!==id); // This will create a new array and return it (good practice)
    res.redirect('/comments');
});