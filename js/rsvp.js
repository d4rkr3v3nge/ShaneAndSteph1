function submitRSVP(event) {
    event.preventDefault();

    const form = document.getElementById("rsvpForm");

    // Bot trap
    if (form.trap.value !== "") {
        return;
    }

    const formData = {
        name: form.name.value,
        email: form.email.value,
        attending: form.attending.value,
        invitationOnly: form.invitationOnly.value,
        street: form.street.value,
        city: form.city.value,
        state: form.state.value,
        zipcode: form.zipcode.value,
        guests: form.guests.value,
        message: form.message.value,
        userAgent: navigator.userAgent
    };

    const emailPayload = {
        to: "shaneosparks@gmail.com",
        from: "shaneosparks@gmail.com",
        subject: `RSVP from ${formData.name}`,
        message: `
Name: ${formData.name}
Email: ${formData.email}
Attending: ${formData.attending}
Wants Invitation: ${formData.invitationOnly}

Address:
${formData.street}
${formData.city}, ${formData.state} ${formData.zipcode}

Guests Total: ${formData.guests}

Message:
${formData.message}

User Agent:
${formData.userAgent}
        `
    };

    fetch("https://wedding-rsvp.shaneosparks.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailPayload)
    })
    .then(async (response) => {
        if (!response.ok) {
            const errorText = await response.text();
            alert("Email error: " + errorText);
            console.error(errorText);
            return;
        }

        window.location.href = "thankyou.html";
    })
    .catch(err => {
        alert("Error submitting RSVP.");
        console.error(err);
    });
}
function submitRSVP(event) {
    event.preventDefault();

    const form = document.getElementById("rsvpForm");

    // Bot trap
    if (form.trap.value !== "") {
        return;
    }

    const formData = {
        name: form.name.value,
        email: form.email.value,
        attending: form.attending.value,
        invitationOnly: form.invitationOnly.value,
        street: form.street.value,
        city: form.city.value,
        state: form.state.value,
        zipcode: form.zipcode.value,
        guests: form.guests.value,
        message: form.message.value,
        userAgent: navigator.userAgent
    };

    const emailPayload = {
        to: "shaneosparks@gmail.com",
        from: "shaneosparks@gmail.com",
        subject: `RSVP from ${formData.name}`,
        message: `
Name: ${formData.name}
Email: ${formData.email}
Attending: ${formData.attending}
Wants Invitation: ${formData.invitationOnly}

Address:
${formData.street}
${formData.city}, ${formData.state} ${formData.zipcode}

Guests Total: ${formData.guests}

Message:
${formData.message}

User Agent:
${formData.userAgent}
        `
    };

    fetch("https://wedding-rsvp.shaneosparks.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailPayload)
    })
    .then(async (response) => {
        if (!response.ok) {
            const errorText = await response.text();
            alert("Email error: " + errorText);
            console.error(errorText);
            return;
        }

        window.location.href = "thankyou.html";
    })
    .catch(err => {
        alert("Error submitting RSVP.");
        console.error(err);
    });
}
