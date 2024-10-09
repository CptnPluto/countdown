// Set the start and end dates
const startDate = new Date("September 30, 2024 11:00:00").getTime();
const endDate = new Date("October 30, 2024 16:20:00").getTime();
const totalDuration = endDate - startDate;

function updateCountdown() {
	const now = new Date().getTime();
    // const now = new Date("October 30, 2024 16:20:00").getTime();
	const timeLeft = endDate - now;
	const timePassed = now - startDate;

	if (timeLeft <= 0) {
		document.getElementById("countdown").innerHTML = "GET YOUR ROMANCE ON, GIRL/BOY";
        document.getElementById("image-container").style.opacity = 1;
        document.getElementById("image-container").style.filter = "blur(0px)";
        document.getElementById("image-container").style.width ="100%";
	    document.getElementById("image-container").style.height = "100%";
		return;
	}

	// Calculate days, hours, minutes, and seconds
	const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

	// Display the countdown
	document.getElementById("days").innerHTML = String(days).padStart(2, "0");
	document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");
	document.getElementById("minutes").innerHTML = String(minutes).padStart(2,"0");
	document.getElementById("seconds").innerHTML = String(seconds).padStart(2,"0");

	// Calculate values based on the time passed
	let percentageComplete = timePassed / totalDuration;
	if (percentageComplete > 1) percentageComplete = 1; // Cap percentage at 1
	if (percentageComplete < 0) percentageComplete = 0; // Ensure percentage doesn't go negative

	let opacity = percentageComplete;
	let blur = 10 * (1 - percentageComplete);
	let sizePercentage = percentageComplete * 100;

	document.getElementById("image-container").style.opacity = 0 + opacity;
	document.getElementById("image-container").style.filter = "blur(" + blur + "px)";
	document.getElementById("image-container").style.width = sizePercentage + "%";
	document.getElementById("image-container").style.height = sizePercentage + "%";
}

// Update countdown and background opacity every second
setInterval(updateCountdown, 1000);
