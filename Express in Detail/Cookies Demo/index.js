const express = require('express');
const app = express();

// For PARSING cookies:
const cookieParser = require('cookie-parser');
// app.use(cookieParser()); For regular cookies the argument should be empty
app.use(cookieParser('thisismysecret')); // For signed cookies it should contain a coder-defined secret text
// This text is used by cookie-parser to verify the signed cookies

app.get('/greet',(req,res)=>{
    const {name = 'No-name'} = req.cookies; // We are getting name of user from cookies
    res.send(`Hey there, ${name}!`);
});

// Setting our custom cookie:
app.get('/setname', (req,res)=>{
    res.cookie('name','steve chicks');
    res.cookie('animal','harlequin shrimp');
    res.send("Ok sent you a cookie");
})

// Setting our custon SIGNED cookies:
app.get('/getsignedcookies', (req,res)=>{
    res.cookie('fruit','mango', {signed: true}); // This is how to sign a cookie
    res.send("Ok here you have your signed cookie");
});

// For verification of a signed cookie:
app.get('/verifyfruit', (req,res)=>{
    res.send(req.signedCookies);
    // If the signed cookie had been manually tampered with it will either return an empty object
    // or it will set the value of the cookie to 'false'
})
// IF the secret text is changed, all previous existing signed cookies will become invalid

app.listen(3000, ()=>{
    console.log("Serving");
});