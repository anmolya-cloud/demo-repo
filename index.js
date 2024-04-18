const express = require("express");
function square(n){
    return n*n
}


const app = express();
app.get("/", function(req, res){
    const n = req.query.n;
    const ans = square(n);
    res.send("hi there");

})


app.listen(3000);