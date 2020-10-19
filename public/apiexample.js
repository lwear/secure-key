// 56aee3ee-5ed8-4805-9621-8284fa02d2a7

/*
FRoM https://www.freecodecamp.org/news/javascript-fetch-api-tutorial-with-js-fetch-post-and-header-examples/

fetch('https://api.github.com/users/manishmshiva', {
  method: "GET",
  headers: {"Content-type": "application/json;charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => console.log(json)); 
.catch(err => console.log(err));


 { method: 'GET',
  url: 'https://api.thecatapi.com/v1/images/search',
  qs: { limit: '1' },
  headers: { 'x-api-key': '56aee3ee-5ed8-4805-9621-8284fa02d2a7' } };}

  
  fetch('https://api.thecatapi.com/v1/images/search', {
  method: "GET",
  headers: {'x-api-key': '56aee3ee-5ed8-4805-9621-8284fa02d2a7'}
})
.then(response => response.json()) 
.then(json => console.log(json)); 
.catch(err => console.log(err));
  
*/

var activityDiv;


// initialize variables after page loads
window.onload = function() {
  activityDiv  = document.getElementById("activity");
} // window.onload


// get activity from bored api
function fetchActivity() {
  fetch('https://api.thecatapi.com/v1/images/search', {
  method: "GET",
  headers: {'x-api-key': process.env.SECRET}
})
    .then(response => response.json())
    .then(data => changeActivity(data) 
    );
} // window.onload 
 

// change the activity displayed 
function changeActivity(data) {
  console.log(data); 
  activityDiv.src = data[0].url;
} // changeActivity








