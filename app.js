const express = require('express');

const app = express();

app.get('/', (req, rep)=>{
    rep.sendFile(__dirname + "/views/index.html");
});

app.get('/homework', (req, rep) => {
    rep.send('Homework');

});

app.listen(80, ()=>console.log("Listing on port 80."));