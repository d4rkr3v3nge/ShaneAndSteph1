function submitRSVP(event) {
    event.preventDefault();

    const form = document.getElementById("rsvpForm");

    // Build the final message string for the email body
    const finalMessageString =
        `Name: ${form.name.value}\n` +
        `Email: ${form.email.value}\n` +
        `Attending: ${form.attending.value}\n` +
        `Guests: ${form.guests.value}\n` +
        `Street: ${form.street.value}\n` +
        `City: ${form.city.value}\n` +
        `State: ${form.state.value}\n` +
        `Zipcode: ${form.zipcode.value}\n` +
        `Message: ${form.message.value}`;

    // Payload EXACTLY as the Worker expects
    const payload = {
        to: "shaneosparks@gmail.com",
        from: "shaneosparks@gmail.com",
        subject: "RSVP Submission",
        message: finalMessageString
    };

    // Send to your Cloudflare Worker
    fetch("https://wedding-rsvp.shaneosparks.workers.dev/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
    .then(async (response) => {
        if (!response.ok) {
            const errText = await response.text();
            console.error("Worker Error:", errText);
            alert("Error submitting RSVP. Please try again.");
            return;
        }

        // Redirect to thank-you page with query params
        const params = new URLSearchParams({
            name: form.name.value,
            attending: form.attending.value,
            guests: form.guests.value
        });

        window.location.href =
            "https://d4rkr3v3nge.github.io/ShaneAndSteph1/thankyou.html?" +
            params.toString();
    })
    .catch(err => {
        console.error("Fetch Error:", err);
        alert("Network error submitting RSVP.");
    });
}
