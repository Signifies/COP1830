var result = "";
var UI = prompt("Enter a whole number to test as a prime number.");
var TV = parseInt("10", UI);
var HITS = 0;
var DD = TV;
/*Currently, neither browser is loading the popup display.*/

/*
if(HITS>2){
  document.getElementById("demo").innerHTML = TV;
}
*/
while (DD > 0 ) {
  if(TV % DD == 0) {
      HITS++
  }
  DD--;

  document.write(TV + " is a prime number");
  if(HITS > 2) {
  document.write(TV +" is not a prime number");
  }
