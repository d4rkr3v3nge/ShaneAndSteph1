function requestGuestAccess(event) {
    event.preventDefault();

    const form = document.getElementById("guestLoginForm");
    const data = new FormData(form);

    const payload = {
        email: data.get("email")
    };

    const url = "https://script.google.com/macros/s/YOUR_GUEST_ACCESS_SCRIPT_ID/exec";

    fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload)
    }).catch(console.error);

    alert("Access request submitted. We’ll confirm via email if you’re on the guest list.");
    form.reset();
}
