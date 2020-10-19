

var activityDiv;


// initialize variables after page loads
window.onload = function() {
  activityDiv  = document.getElementById("activity");
} // window.onload


function getData() {
  console.log("getting data ");
  return fetch(`/getdata`)
      .then((response) => {
        return response.json();
      })
      .catch(() => {
        return null;
      });
}



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








