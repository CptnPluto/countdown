// Set the date and time for the countdown
const targetDate = new Date('October 30, 2024 16:20:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft < 0) {
        document.getElementById('countdown').innerHTML = "00:00:00:00";
        return;
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById('days').innerHTML = String(days).padStart(2, '0');
    document.getElementById('hours').innerHTML = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerHTML = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerHTML = String(seconds).padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);