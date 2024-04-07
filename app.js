const express = require('express');

const app = express();

app.get('/', (req, rep)=>{
    rep.send("Home Page");
});

app.get('/homework', (req, rep) => {
    rep.send('<h1>Homework Page</h1>');
});

app.listen(80, ()=>console.log("Listing on port 80."));