var banner = document.getElementById("welcome-banner");

// Show the current date and time.
function showWelcome() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Add a zero before single digits.
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var message = "Welcome to the Library Management System website! ";
    message += "Today is " + now.toDateString();
    message += ", and the time is " + hours + ":" + minutes + ":" + seconds + ".";

    document.getElementById("welcome-text").innerText = message;
}

// Move the text left, then start again from the right.
function moveBanner() {
    banner.scrollLeft += 1;

    if (banner.scrollLeft >= banner.scrollWidth - banner.clientWidth) {
        banner.scrollLeft = 0;
    }
}

showWelcome();

// Update the clock every second.
setInterval(showWelcome, 1000);

// Move the text one pixel every 15 milliseconds.
setInterval(moveBanner, 15);