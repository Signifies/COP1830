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

//When I add this loop section, my window prompt won't show up.
//It's fine once I remove it...
while (DD > 0 ) {
  if(TV % DD == 0) {
      HITS++
        DD--;
  }

  if(HITS > 2) {
  document.write(TV +" is not a prime number");
}else {
  document.write(TV + " is a prime number");
}

//PROJECT INSTRUCTIONS (They're pretty vauge.)
/*
You are not required to analyze the steps necessary to accomplish the objective of the script.
That work has already been done for you, resulting in an "algorithm" (logical recipe) as follows.
A.Start.
B.Display a prompt dialog box and store the user's input in UI.
i.Store UI acquired from a prompt dialog box.ii.ParseUI as a Base-10 integer and assign it to variable TV.
C.Initialize the HITS counter to zero.D.Initialize the DD variable to the value of TV.E.While DD is greater than zero, repeat the following block of two steps:
i.Test if TV is evenly divisible by DD (that is,if the remainder of TV/DD equals zero).If so, increment HITS by 1.
ii.Decrement DD by 1.F.Display results within an HTML paragraph the browser's document window as seen in the Sample OUTPUT.
The steps below must be performed in the order shown.i.Displaythe text stored in string UI.ii.Display the string "is"iii.
If HITS is greater than 2, then display the string "not"iv.Display the string "a prime number."G.End.

*/
