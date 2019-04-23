/**
FILENAME: m6a1.js
AUTHOR:
DATE: 04/18/19
*/
/**
Displays our browser information. In our case, the info was mozilla firefox.
*/
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

/**
One of my more ingenious solutions.
Loops through requested values and tests them using my favorite boolean expression.
*/
function featureTest() {
  document.getElementById("heading").innerHTML = "Compatible HTML5 Features";
  var typeValues = ["search", "number", "range", "color", "tel", "url", "email", "date", "month", "week", "datetime", "datetime-local"];
  var i = document.createElement("input");
  var dataValues = "";
  dataValues += "<ul>";
  for(l=0; l <= typeValues.length; l++) {
                i.setAttribute("type",typeValues[l]);
                var result = i.type !== "text" ? "YES" : "NO";
                dataValues += "<li>" + typeValues[l] + ": " + result+"</li>";
      }
      dataValues +="</ul>";
      document.getElementById("output").innerHTML = dataValues;
}

/**
Straight forward. Get and display the screen resolution.
*/
function resolution() {
  document.getElementById("heading").innerHTML = "Mobile Screen Information";
  var res = "";
  res +="<ul>";
  res += "<li>Width: " +screen.width+ "</li>";
  res += "<li>Height: " +screen.height+ "</li>";
  res +="</ul>";
  document.getElementById("output").innerHTML = res;
}

/**
Screen orientation
*/
function orientation() {
  var h = screen.height;
  var w = screen.width;

  var oRes = (h > w) ? "portrait-primary" : "landscape-primary"; //Can I just same how much I love ternary operations???

  var format = "";
  format +="<ul>";
  format += "<li>Orientation: " +oRes+"</li>";
  format +="</ul>";
  document.getElementById("output").innerHTML = format; //landscape
}

/**
Can we even have a canvas?
*/
function support() {
  return !!document.createElement('canvas').getContext;
}

function supportText() {
  if(support()) {
    var testCanvas = document.createElement('canvas');
    var context = testCanvas.getContext('2d');
    return typeof context.fillText == 'function';
  }
}
function canvasTextSupport() {
  document.getElementById("heading").innerHTML = "Canvas Information";
  var test = supportText() ? "This browser supports canvas text." : "Sorry, this browser does not support canvas text. :[";
  document.getElementById("output").innerHTML = test;
}
/**
General Support
*/
function generalSupport() {
  document.getElementById("heading").innerHTML = "Canvas Information";
  var tv = support() ? "true" : "false";
  var format = "";
  format +="<ul>";
  format +="<li>Canvas support: "+tv+ "</li>";
  format +="</ul>";
  document.getElementById("output").innerHTML = format;
}

function drawCanvas(){
            document.getElementById("heading").innerHTML = "Canvas Information";
            document.getElementById("output").innerHTML = "";
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            var img = new Image();
            img.src = "images/serveimage.png";
            ctx.drawImage(img, screen.height, screen.width);
        };
