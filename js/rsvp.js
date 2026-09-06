function submitRSVP(event) {
    event.preventDefault();

    const form = document.getElementById("rsvpForm");
    const data = new FormData(form);

    data.append("token", "8Y5Wv99i8PW%b0");
    data.append("ip", "");
    data.append("ua", navigator.userAgent);

    fetch("https://script.google.com/macros/s/AKfycbziGTfbwfR6p5YjV3x0iyHe_1wZNGMbVxYpavFPbLJJSj3TSvIsZl8YwABW2GzESAJ7vQ/exec", {
        method: "POST",
        body: data
    })
    .then(res => res.text())
    .then(result => {
        if (result === "OK") {
            // Redirect to thank-you page
            window.location.href = "https://d4rkr3v3nge.github.io/ShaneAndSteph1/thankyou.html";
        } else if (result === "RATE_LIMIT") {
            alert("Too many submissions. Please try again later.");
        } else {
            alert("Submission blocked.");
        }
    })
    .catch(err => {
        alert("Error submitting RSVP.");
        console.error(err);
    });
}
