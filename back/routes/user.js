const router = require("express").Router();


router.post("/usertest",(req,res)=>{
    const username = req.body.username
    console.log(username);
    res.send(username)
})


module.exports = router