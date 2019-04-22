
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

function test() {
  var typeValues = ["search", "number", "range", "color", "tel", "url", "email", "date", "month", "week", "datetime", "datetime-local"];
  var i = document.createElement("input");
  for(l =0; l <= typeValues.length; l++) {

    i.setAttribute("type",typeValues[l]);
    var result = i.type !== "text" ? "YES" : "NO";
    var output = "";
    output += "<ul>";

    output += "<li>Search: " + result+"</li>";
    output += "<li>Number: " + result +"</li>";
    output += "<li>Range: " + result +"</li>";
    output += "<li>Color: " + result +"</li>";
    output += "<li>Tel: " + result +"</li>";
    output += "<li>Url: " + result +"</li>";
    output += "<li>Email: " + result +"</li>";
    output += "<li>Date: " + result +"</li>";
    output += "<li>Date: " + result +"</li>";
    output += "<li>Month: " + result +"</li>";
    output += "<li>Week: " + result+"</li>";
    output += "<li>Time: " + result +"</li>";
    output += "<li>Datetime: " + result +"</li>";
    output += "<li>Datetime-local" + result +"</li>";
    output += "</ul>";
    document.getElementById("output").innerHTML = output;
  }
}

/*


function featureTest() {
  document.getElementById("heading").innerHTML = "Compatible HTML5 Features";
  var output = "";
  output += "<ul>";

  output += "<li>Search: " +  +"</li>"
  output += "<li>Number: " + "VALUE" +"</li>"
  output += "<li>Range: " + "VALUE" +"</li>"
  output += "<li>: " + "VALUE" +"</li>"
  output += "<li>Search: " + "VALUE" +"</li>"
  output += "<li>Search: " + "VALUE" +"</li>"
  output += "<li>Search: " + "VALUE" +"</li>"
  output += "<li>Search: " + "VALUE" +"</li>"
  output += "<li>Search: " + "VALUE" +"</li>"
  output += "<li>Search: " + "VALUE" +"</li>"
  output += "<li>Search: " + "VALUE" +"</li>"
  output += "<li>Search: " + "VALUE" +"</li>"
  output += "<li>Search: " + "VALUE" +"</li>"
  output += "</ul>";
  document.getElementById("output").innerHTML = output;
}


function feature (value) {
  var i = document.createElement("input");
  var.setAttribute("type", value);
  return i.type !== "text" ? "YES" : "NO";
}


*/
