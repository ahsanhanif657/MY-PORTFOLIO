const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".section");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Remove active from all
        tabs.forEach(t => t.classList.remove("active"));
        sections.forEach(s => s.classList.remove("active"));

        // Activate clicked tab
        tab.classList.add("active");
        document.getElementById(tab.dataset.page).classList.add("active");
    });
});

// Contact button scroll
document.getElementById("contactBtn").addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    document.querySelector('[data-page="contact"]').classList.add("active");
    document.getElementById("contact").classList.add("active");
});