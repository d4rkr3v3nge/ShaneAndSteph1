function submitRegistration(event) {
    event.preventDefault();

    const form = document.getElementById("regForm");
    const data = new FormData(form);

    const payload = {
        name: data.get("name"),
        email: data.get("email"),
        phone: data.get("phone"),
        message: data.get("message")
    };

    // TODO: replace with your Google Apps Script URL if you want to store in a Sheet
    // Example: const url = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
    const url = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

    fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload)
    }).catch(console.error);

    window.location.href = "success.html";
}
