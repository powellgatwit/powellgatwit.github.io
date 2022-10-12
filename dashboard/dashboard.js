
// constants

const START = new Date(2022, 8, 12); //sept 12 2022
const END = new Date(2022, 11, 16); //dec 16 2022

const MS_TO_DAYS = 86400000;

const TOTAL_DAYS = Math.ceil((END - START)/MS_TO_DAYS);

function statistics() {
    const now = new Date();

    // days completed / days remaining
    const daysElapsed = Math.floor((now - START)/MS_TO_DAYS);
    const daysRemaining = Math.floor((END - now)/MS_TO_DAYS);
    
    // weeks completed / weeks remaining
    const weeksElapsed = Math.floor(daysElapsed / 7);
    const leftoverDaysElapsed = daysElapsed % 7 + 1;
    const weeksRemaining = Math.floor(daysRemaining / 7);
    const leftoverDaysRemaining = (daysRemaining % 7) + 1; //unused

    document.getElementById("currentweek").innerHTML = weeksElapsed;
    document.getElementById("dayofweek").innerHTML = leftoverDaysElapsed;
    
    document.getElementById("totaldays").innerHTML = daysElapsed;
    document.getElementById("daysremaining").innerHTML = daysRemaining

    document.getElementById("totalweeks").innerHTML = weeksElapsed;
    document.getElementById("weeksremaining").innerHTML = weeksRemaining;
    
    // END HERE if not currently working
    if (now.getHours() < 9 || now.getHours() > 17) return;
    // or if it's a weekend
    if (now.getDay() == 6 || now.getDay() == 0) return;

    // total time worked in MS.
    // eight hours per day, not including saturdays and sundays...
    const timeWorked = (now - START) - (weeksElapsed * 28800000 * 2) - (daysElapsed * 57600000);
    const hoursWorked = timeWorked / 3600000;
    const moneyEarned = (hoursWorked * 52).toFixed(2);

    document.getElementById("hoursworked").innerHTML = hoursWorked.toFixed(1);
    document.getElementById("earned").innerHTML = moneyEarned;

}

function nanowrimo() {
    const now = new Date();
    const NOV_1 = new Date(2022, 10, 1);
    const NOV_30 = new Date(2022, 10, 30);

    if (now < NOV_1) {
        document.getElementById("nano").innerHTML = "until NaNoWriMo: " + ((NOV_1 - now)/MS_TO_DAYS).toFixed(0);
    } else {
        document.getElementById("nano").innerHTML = "of NaNoWriMo: " + ((NOV_30 - now)/MS_TO_DAYS).toFixed(0);
    }
}

// updates 5 times per second
setInterval(statistics, 200);
setInterval(nanowrimo, 5000);
