

var elem;


// initialize variables after page loads
window.onload = function() {
  elem  = document.getElementById("pic");
} // window.onload


// get data from api
function getData() {
  console.log("getting data ");
  fetch('/getdata')
    .then(response => response.json())
    .then(data => {console.log("data"); updateData(data);} 
    ).catch((err) => {
        console.error('API Error:', err.message);
    //resp.json(generateFakeForecast(location));
  });
} 
 

// change the activity displayed 
function updateData(data) {
  console.log("updating");
  console.log(data); 
  elem.src = data[0].url;
} // changeActivity








