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
        document.body.style.backgroundColor = "#005967";
    } else if (h >= 12 && h < 19) {
        //between 12pm and 7pm, afternoon
        document.body.style.backgroundColor = "#50351D";
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

//functions to run on page load
function run() {
    greeting();
    bgroundcolor();
    copydate();
}

window.onload = run();