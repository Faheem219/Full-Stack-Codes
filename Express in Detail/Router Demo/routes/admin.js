const express = require('express');
const router = express.Router();

// DEFINING ROUTER SPECIFIC MIDDLEWARE:
router.use((req,res,next)=>{
    if(req.query.isAdmin){
        return next();
    }
    res.send("Sorry not an admin");
});

router.get('/topsecret', (req,res)=>{
    res.send("this is top secret");
});
router.get('/deleteeverything', (req,res)=>{
    res.send('Ok deleted');
});

module.exports = router;