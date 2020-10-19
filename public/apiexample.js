

var elem;


// initialize variables after page loads
window.onload = function() {
  elem  = document.getElementById("activity");
} // window.onload


function getData() {
  console.log("getting data ");
  return fetch('/getdata')
      .then((response) => {
        return response.json();
      })
      .catch(() => {
        return null;
      });
}



// get data from api
function fetchActivity() {
  fetch('/getdata')
    .then(response => response.json())
    .then(data => updateData(data) 
    );
} // window.onload 
 

// change the activity displayed 
function updateData(data) {
  console.log(data); 
  elem.src = data[0].url;
} // changeActivity








