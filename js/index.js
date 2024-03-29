//javascript file for powellgatwit.github.io
//written by George Powell unless otherwise noted

//display appropriate content based on menu selection (index.html)
function menu(page, id) {
    //clear current showing
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("resume").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("home").style.display = "none";
    //no more underlines
    document.getElementById("a").style.textDecorationColor = "transparent";
    document.getElementById("b").style.textDecorationColor = "transparent";
    document.getElementById("c").style.textDecorationColor = "transparent";
    document.getElementById("d").style.textDecorationColor = "transparent";
    document.getElementById("h").style.textDecorationColor = "transparent";
    //show selected content
    document.getElementById(page).style.display = "inline";
    //underline the selected page
    document.getElementById(id).style.textDecorationColor = "white";
}

/* Typewriter JS by Geoff Graham */

// set up text to print, each item in array is new line
var aText = new Array("George Powell");
var iSpeed = 55; // time delay of print out
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
/*
$(function () {
    count2 = 0;
    locs = ["", " ➜ Houston, Texas?"];
    setInterval(function () {
      count2++;
      $("#location").fadeOut(400, function () {
        $(this).text(locs[count2 % locs.length]).fadeIn(500);
      });
    }, 7000);
  });
*/

window.onload = setTimeout(typewriter, 700), document.getElementById(h).style.textDecorationColor = "white";
