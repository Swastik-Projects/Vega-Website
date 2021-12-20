var footer_copyright = document.getElementById("footer_copyright");
var increasing_servers = document.getElementById("increasing_servers");
var increasing_users = document.getElementById("increasing_users");
var increasing_channels = document.getElementById("increasing_channels");
var year = new Date().getFullYear();

footer_copyright.innerHTML = 'Copyright © [Vega Community] - ' + year;

window.onload = function(){
    increaseNumbers()
}

var speed = 10;

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function increaseElementNumbers(id, stopNumber) {
  elt = document.getElementById(id);
  endNbr = stopNumber;//Number(document.getElementById(id).innerHTML);
  increaseNumbersRecursive(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function increaseNumbersRecursive(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {//Delay a bit before calling the function again.
        increaseNumbersRecursive(i + 1, endNbr, elt);
    }, speed);
  }
}

function increaseNumbers(){
    increaseElementNumbers("increasing_servers", 78);
    increaseElementNumbers("increasing_users", 340);
    increaseElementNumbers("increasing_channels", 214);
}

//increaseElementNumbers("nbr"); /*Call this funtion with the ID-name for that element to increase the number within*/

 