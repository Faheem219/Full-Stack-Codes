const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const adminRoute = require('./routes/admin');

// One of the advantages of this is that one can change all routes easily from this one central place
app.use('/shelters',shelterRoutes); // 1st arg is the prefix to attach to the router in 2nd arg and serve it
app.use('/dogs', dogRoutes);
app.use('/admin',adminRoute);


app.listen(3000, ()=>{
    console.log("At 3000");
})