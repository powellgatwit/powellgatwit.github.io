//javascript file for powellgatwit.github.io

var d = new Date();
var h = d.getHours();

//between sunrise and 12pm, morning

function greeting() {
    //between sunrise and 12pm, morning
    if (h > 7 && h < 12) {
        document.getElementById("mor").style.display = "inline";
    } else if (h >= 12 && h < 19) {
        document.getElementById("aft").style.display = "inline";
    } else if (h >= 19 && h < 24) {
        document.getElementById("eve").style.display = "inline";
    } else {
        document.getElementById("nig").style.display = "inline";
    }
}

function run() {
    greeting();
}

window.onload = run();