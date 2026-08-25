function submitRSVP(event) {
    event.preventDefault();

    const form = document.getElementById("rsvpForm");
    const data = new FormData(form);

    const payload = {
        name: data.get("name"),
        email: data.get("email"),
        attending: data.get("attending"),
        guests: data.get("guests"),
        message: data.get("message")
    };

    const url = "https://script.google.com/macros/s/AKfycbzsqNCUDcS6bpuqkO9rnEjYuakxlb0NiqvZllgUuAsxTJeKjZx2LxyQqVr0QRb47rA/exec";

    fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload)
    }).catch(console.error);

    alert("Thank you! Your RSVP has been recorded.");
    form.reset();
}
