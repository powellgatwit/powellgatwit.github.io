//javascript file for powellgatwit.github.io
//written by George Powell unless otherwise noted

var d = new Date();
var h = d.getHours();

function greeting() {
    if (h >= 6 && h < 12) {
        //between 6am and 12pm, morning
        document.getElementById("mor").style.display = "inline";
        document.body.style.backgroundColor = "#114C4B";
    } else if (h >= 12 && h < 19) {
        //between 12pm and 7pm, afternoon
        document.getElementById("aft").style.display = "inline";
        document.body.style.backgroundColor = "#50351D";
    } else if (h >= 19 && h < 22) {
        //between 7pm and 10pm, evening
        document.getElementById("eve").style.display = "inline";
        document.body.style.backgroundColor = "#291D50";
    } else {
        //else (10pm and 6am), night
        document.getElementById("nig").style.display = "inline";
        document.body.style.backgroundColor = "#1D1D1D";
    }
}

//functions to run on page load
function run() {
    greeting();
}

window.onload = run();