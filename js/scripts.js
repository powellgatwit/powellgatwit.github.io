//javascript file for powellgatwit.github.io
//written by George Powell unless otherwise noted

var d = new Date();
var h = d.getHours();

//function that updates page greeting
function greeting() {
    if (h >= 6 && h < 12) {
        //between 6am and 12pm, morning
        document.getElementById("mor").style.display = "inline";
    } else if (h >= 12 && h < 19) {
        //between 12pm and 7pm, afternoon
        document.getElementById("aft").style.display = "inline";
    } else if (h >= 19 && h < 22) {
        //between 7pm and 10pm, evening
        document.getElementById("eve").style.display = "inline";
    } else {
        //else (10pm and 6am), night
        document.getElementById("nig").style.display = "inline";
    }
}

function bgroundcolor() {
    if (h >= 6 && h < 12) {
        //between 6am and 12pm, morning
        document.body.style.backgroundColor = "#004853";
    } else if (h >= 12 && h < 19) {
        //between 12pm and 7pm, afternoon
        document.body.style.backgroundColor = "#003A25";
    } else if (h >= 19 && h < 22) {
        //between 7pm and 10pm, evening
        document.body.style.backgroundColor = "#291D50";
    } else {
        //else (10pm and 6am), night
        document.body.style.backgroundColor = "#1D1D1D";
    }
}

//function to print year in copyright notice
//or, 2021 - "y" if 2021 has already gone
function copydate() {
    var y = new Date().getFullYear();
    if(y == 2021) {
        document.getElementById("copyyear").innerHTML = new Date().getFullYear();
    } else {
        document.getElementById("copyyear").innerHTML = "2021 - " + new Date().getFullYear();
    }
}

//Typewriter JS by Geoff Graham
// set up text to print, each item in array is new line
var aText = new Array("George Powell");
var iSpeed = 65; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
     
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
     
function typewriter() {
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("name");
     
    while ( iRow < iIndex ) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
    if ( iTextPos++ == iArrLength ) {
        iTextPos = 0;
        iIndex++;
        if ( iIndex != aText.length ) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}

//functions to run on page load (all pages)
function run() {
    bgroundcolor();
    copydate();
}
window.onload = run();

//greeting() must be run on the custom homepage
//typewriter() must be run on index.html