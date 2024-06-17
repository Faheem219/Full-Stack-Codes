const express = require('express');
const app = express();
const path = require('path');
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://127.0.0.1:27017/authDemo')
.then(()=>{
    console.log("Connection Successful");
})
.catch((e)=>{
    console.log("Connection Failed: ",e);
});

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded({extended: true}));
// On successful login or sign up we will store the user id in the session
// On logout we'll set it to null or destroy it
app.use(session({secret: 'notagoodsecret', resave: false, saveUninitialized: false}));

// Creating a LOGIN MIDDLEWARE:
const requireLogin = (req,res,next)=>{
    if(!req.session.user_id){
        return res.redirect('/login');
    } 
    next();
}


app.get('/', (req,res)=>{
    res.send("This is the home page");
})

app.get('/register', (req,res)=>{
    res.render('register');
});

// Hashing the login data and storing (REGISTERING):
app.post('/register', async (req,res)=>{
    const {username, password} = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        password: hash
    });
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/secret');
});

app.get('/login', (req,res)=>{
    res.render('login');
})

// LOGIN (Its better to say Inc. password OR username whenever the data is inc. so as to not give any hints)
app.post('/login', async (req,res)=>{
    const {username, password} = req.body;
    const user = await User.findOne({username});
    const validPassword = await bcrypt.compare(password, user.password);
    if(validPassword){
        req.session.user_id = user._id;
        res.redirect('/secret');
    }else{
        res.redirect('/login');
    };
})

// Authorizing in the route handler itself:
app.get('/secret', (req,res) => {
    if(!req.session.user_id){
        return res.redirect('/login');
    }
    res.render('secret');
});

// Authorizing with the help of middleware:
app.get('/topsecret', requireLogin, (req,res)=>{
    res.render('secret');
})

app.post('/logout', (req,res)=>{
    req.session.user_id = null;
    // req.session.destroy(); If multiple info was stored in session, better to just destroy it
    res.redirect('/login');
})


app.listen(3000, ()=>{
    console.log("At 3000");
})