const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

// This is used to serve the static files (It by default searches for public dir):
// app.use(express.static('public')) To fix above issue use this:
app.use(express.static(path.join(__dirname,'public')));

// This is used to set EJS, EJS by default assumes that our templates (views) exist in a dir called views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // This is used to change the above default behaviour
// __dirname refers to the location where ejs is stored

app.get('/', (req, res) => {
    res.render('home.ejs'); // render is used to send files, .ejs is not necessary
});

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { rand: num }); // The 2nd arg is used to return values to the template
    // res.render('random.ejs',{num}); This also works, both key and value is num
});

// A more complex subreddit example using data from a json file:
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data }); // Here we are spreading the object
    } else {
        res.render('notfound', { subreddit })
    }
});

app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Rocket', 'Monty', 'Winston', 'Stephannie'];
    res.render('cats', { cats });
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
});