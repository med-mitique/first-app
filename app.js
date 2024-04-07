const express = require('express');

const app = express();

app.get('/', (req, rep)=>{
    console.log("request on /");
    rep.sendFile(__dirname + '/views/index.html');
});

app.get('/homework', (req, rep) => {
    console.log("request on /homework");
    rep.send('<h1>Homework Page</h1>');
});

app.listen(3000, ()=>console.log("Listing on port 80."));