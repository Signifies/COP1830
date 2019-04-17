/**
m5a1.htm
Evan Stuehmer
04/04/19
*/
var UI = prompt("Enter a whole number to test as a prime number.", "");
var TV = parseInt(UI, "10");
var HITS = 0;
var DD = TV;

while (DD > 0 ) {
  if(TV % DD == 0) {
      HITS++;
  }
    DD--;
}

document.write(UI+" is");
if(HITS > 2){
  document.write(" not");
}
document.write(" a prime number.");
