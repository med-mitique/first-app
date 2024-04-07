const express = require('express');

const app = express();

app.get('/', (req, rep)=>{
    console.log("request on /");
    rep.send("Home Page");
});

app.get('/homework', (req, rep) => {
    console.log("request on /");
    rep.send('<h1>Homework Page</h1>');
});

app.listen(80, ()=>console.log("Listing on port 80."));