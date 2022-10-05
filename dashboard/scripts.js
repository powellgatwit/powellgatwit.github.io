
const START = new Date(2022, 8, 12); //sept 12 2022
const END = new Date(2022, 11, 16); //dec 16 2022

const MS_TO_DAYS = 86400000;

const TOTAL_DAYS = Math.ceil((END - START)/MS_TO_DAYS);

// updates every 100 ms
function statistics() {
    const now = new Date();

    // days completed / days remaining
    const daysElapsed = Math.floor((now - START)/MS_TO_DAYS);
    const daysRemaining = Math.floor((END - now)/MS_TO_DAYS);
    
    // weeks completed / weeks remaining
    const weeksElapsed = Math.floor(daysElapsed / 7);
    const leftoverDaysElapsed = daysElapsed % 7;
    const weeksRemaining = Math.floor(daysRemaining / 7);
    const leftoverDaysRemaining = (daysRemaining % 7) + 1;

    // END HERE if not currently working
    if (now.getHours() < 9 || now.getHours() > 17) return;
    // or if it's a weekend
    if (now.getDay() == 6 || now.getDay() == 0) return;

    /* HOURLY STUFF */

    // total time worked in MS.
    // eight hours per day, not including saturdays and sundays...
    const timeWorked = (now - START) - (weeksElapsed * 28800000 * 2) - (daysElapsed * 57600000);
    const hoursWorked = timeWorked / 3600000;
    const moneyEarned = (hoursWorked * 52).toFixed(2);

    document.getElementById("currentweek").innerHTML = weeksElapsed;
    document.getElementById("dayofweek").innerHTML = leftoverDaysElapsed;
    
    document.getElementById("totaldays").innerHTML = daysElapsed;
    document.getElementById("daysremaining").innerHTML = daysRemaining
    document.getElementById("hoursworked").innerHTML = hoursWorked.toFixed(1);

    document.getElementById("totalweeks").innerHTML = weeksElapsed;
    document.getElementById("weeksremaining").innerHTML = weeksRemaining;
    document.getElementById("earned").innerHTML = moneyEarned;
    // document.getElementById("hoursworked").innerHTML = 
    // document.getElementById("hoursworked").innerHTML = 


    /*      DEBUGGING       */
    // console.log("It has been " + daysElapsed + " days since you started.");

    // console.log("There are " + daysRemaining + " remaining.");
    // console.log("\nIt has been " + weeksElapsed + " weeks and " + leftoverDaysElapsed + " day(s) since you started.");
    // console.log("There are " + weeksRemaining + " weeks and " +  leftoverDaysRemaining + " days remaining.")
    
    // console.log("MS worked: " + timeWorked);
    // console.log("Hours worked: " + hoursWorked.toFixed(2));
    // console.log("Money earned: roughly $" + moneyEarned);
    
    // console.log("Total days: " + TOTAL_DAYS);

}

// updates every second
function updateS() {
    var currenttime = Date.now();

    const elapsed = currenttime - START; // in ms

    
    
    // progress bars
}

setInterval(statistics, 200);
