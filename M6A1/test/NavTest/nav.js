
function browserTest() {
  var heading = "Browser Information";
  document.getElementById("heading").innerHTML = heading;
  var output = "";
  output += "<li>Browser CodeName: " + navigator.appCodeName + "</li>";
  output += "<li>Browser Name: " + navigator.appName + "</li>";
  output += "<li>Browser Version: " + navigator.appVersion + "</li>";
  output += "<li>Cookies Enabled: " + navigator.cookieEnabled + "</li>";
  output += "<li>Browser Language: " + navigator.language + "</li>";
  output += "<li>Browser Online: " + navigator.onLine + "</li>";
  output += "<li>Platform: " + navigator.platform + "</li>";
  output += "<li>User-agent header: " + navigator.userAgent + "</li>";
  document.getElementById("Test").innerHTML = output;
}

function featureTest(){
  var heading = "Compatible HTML5 Features";
  document.getElementById("heading").innerHTML = heading;

  document.getElementById("output").innerHTML = ""; //We'll control the ouput using ternary operator.

  //var result /*CONDITION*/ ? "YES" : "NO"; //Will implement later
}
