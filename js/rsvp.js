function submitRSVP(event) {
    event.preventDefault();

    const form = document.getElementById("rsvpForm");
    const formData = {
        name: form.name.value,
        email: form.email.value,
        attending: form.attending.value,
        street: form.street.value,
        city: form.city.value,
        state: form.state.value,
        zipcode: form.zipcode.value,
        guests: form.guests.value,
        message: form.message.value,
        token: "8Y5Wv99i8PW%b0",
        ip: "",
        userAgent: navigator.userAgent
    };

    fetch("https://script.google.com/macros/s/AKfycbznDgToSTUbaQ5kqVnoxzPq1oB2GW59Gfbyl7IY70zWNxW3gP1ruMk2hqKgqJOlEUvo/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(() => {
        window.location.href = "https://d4rkr3v3nge.github.io/ShaneAndSteph1/thankyou.html";
    })
    .catch(err => {
        alert("Error submitting RSVP.");
        console.error(err);
    });
}
