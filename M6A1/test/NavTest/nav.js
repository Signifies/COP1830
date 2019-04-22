
function browserTest() {
  document.getElementById("heading").innerHTML = "Browser Information";
  var output = "";
  output +="<ul>";
  output += "<li>Browser CodeName: " + navigator.appCodeName + "</li>";
  output += "<li>Browser Name: " + navigator.appName + "</li>";
  output += "<li>Browser Version: " + navigator.appVersion + "</li>";
  output += "<li>Cookies Enabled: " + navigator.cookieEnabled + "</li>";
  output += "<li>Browser Language: " + navigator.language + "</li>";
  output += "<li>Browser Online: " + navigator.onLine + "</li>";
  output += "<li>Platform: " + navigator.platform + "</li>";
  output += "<li>User-agent header: " + navigator.userAgent + "</li>";
  output += "</ul>";
  document.getElementById("output").innerHTML = output;
}

function featureTest() {
  document.getElementById("heading").innerHTML = "Compatible HTML5 Features";
  var output = "";
  output += "<ul>";
  output += "<li>Search: " + "hi" +"</li>"
  output += "</ul>";
  document.getElementById("output").innerHTML = output;

}

/*
function test() {
  var typeValues = ["search", "number", "range", "color", "tel", "url", "email", "date", "month", "week", "datetime", "datetime-local"];
  var i = document.createElement("input");
  for(int l =0; l <= typeValues.length; l++; ) {

    i.setAttribute("type",typeValues[l]);
    var result = i.type !== "text" ? "YES" : "NO";
    document.getElementById("output").innerHTML = result;
  }
}
*/
