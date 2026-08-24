function submitRegistration(event) {
    event.preventDefault();

    const form = document.getElementById("regForm");
    const data = new FormData(form);

    const payload = {
        name: data.get("name"),
        email: data.get("email"),
        phone: data.get("phone"),const slides = {
    gallery: [
        "img/gallery/photo1.jpg",
        "img/gallery/photo2.jpg",
        "img/gallery/photo3.jpg"
    ],
    engagement: [
        "img/engagement/photo1.jpg",
        "img/engagement/photo2.jpg",
        "img/engagement/photo3.jpg"
    ]
};

const slideIndex = {
    gallery: 0,
    engagement: 0
};

function updateSlideshow(type) {
    const elId = type === "gallery" ? "gallery-slideshow" : "engagement-slideshow";
    const container = document.getElementById(elId);
    if (!container) return;
    const img = container.querySelector("img");
    img.src = slides[type][slideIndex[type]];
}

function nextSlide(type) {
    slideIndex[type] = (slideIndex[type] + 1) % slides[type].length;
    updateSlideshow(type);
}

function prevSlide(type) {
    slideIndex[type] =
        (slideIndex[type] - 1 + slides[type].length) % slides[type].length;
    updateSlideshow(type);
}

document.addEventListener("DOMContentLoaded", () => {
    updateSlideshow("gallery");
    updateSlideshow("engagement");
});

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
document.addEventListener("scroll", () => {
    document.querySelectorAll(".fade-section").forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 120) {
            sec.classList.add("visible");
        }
    });
});
