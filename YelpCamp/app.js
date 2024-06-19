const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError');
const session = require('express-session');
const flash = require('connect-flash');

const campgrounds = require('./routes/campgrounds');
const reviews = require('./routes/reviews');

// ===================
// CONFIGURATIONS
// ===================

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

// For checking if the database connected or not:
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
// The above is an event listener on db (mong conn.) that listens for 'error', if there is error, console.error
// object is called which here we have bounded with a string "connection error" which will be printed
db.once("open", () => {
  console.log("Database connection");
});

const app = express();

app.engine('ejs', ejsMate); // Specifying the layout that ejs should use instead of default

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public'))); // Setting lookup directory for static files

// Configuring our session:
const sessionConfig = {
  secret: "thisshouldbeabettersecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000*60*60*24*7,
    maxAge: 1000*60*60*24*7
  }
}
app.use(session(sessionConfig));
app.use(flash());

app.use((req,res,next)=>{
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
})

// ===================
// ROUTES
// ===================

app.use('/campgrounds', campgrounds);
app.use('/campgrounds/:id/reviews', reviews); // Here, access to :id will not be given to reviews router 
// by default, you have to set mergeParams: true while defining router to enable this 

app.get('/', (req, res) => {
  res.render('home');
});

// This will catch any request that doesnt match any of the above routes
app.all('*', (req,res,next)=>{
  next(new ExpressError('Page Not Found',404));
})

app.use((err, req, res, next) => {
  const {statusCode=500} = err;
  if(!err.message) err.message = 'Oh No, Something Went Wrong!'
  res.status(statusCode).render('error', {err});
})

app.listen(3000, () => {
  console.log('Serving on port 3000');
});