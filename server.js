// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const fetch = require('node-fetch');
const app = express();

const API_KEY = process.env.SECRET;
const BASE_URL = 'https://api.thecatapi.com/v1/images/search';



// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

 // Handle requests for the data
app.get('/getData', fetchData);



// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

// get data from API
function fetchData(req , response) {
  
  fetch(BASE_URL, {
    method: "GET",
    headers: {'x-api-key': API_KEY}
  })
   .then(response => response.json()) // get the json from the response
   .then(data => response.json(data)) // returns the json to the app as an object
   .catch((err) => {
        console.error('API Error:', err.message);
  });
} 
