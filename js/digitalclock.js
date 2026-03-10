// Display the current time! I'm a chronomancer!
function currentTime() {
    let theTime = new Date();

    let hours = theTime.getHours();
    let minutes = theTime.getMinutes();
    let seconds = theTime.getSeconds();

    let theDay = theTime.getDay();
    const daysoftheweek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    let ampm = "AM"
    if (hours >= 12) {
        ampm = "PM"
    }

    if (hours > 12){
        hours = hours % 12;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let evenSeconds = seconds % 2;
    if (evenSeconds === 0) {
        document.getElementById("c1").style.color = "red";
        document.getElementById("c2").style.color = "red";
    }
    if (evenSeconds === 1) {
        document.getElementById("c1").style.color = "black";
        document.getElementById("c2").style.color = "black";
    }


    // Display the HTML
    document.getElementById("weekday").innerHTML = daysoftheweek[theDay];
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
    document.getElementById("ampm").innerHTML = ampm;     


}

setInterval(() => {
    currentTime();
}, 100);