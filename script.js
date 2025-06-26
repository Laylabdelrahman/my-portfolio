document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const toggleButtons = document.querySelectorAll("#toggle-mode, #mobile-toggle-mode"); 
    const hamburger = document.querySelector(".hamburger");
    const mobileNav = document.querySelector(".mobile-nav");

    // Toggle Dark Mode for both buttons
    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            body.classList.toggle("dark-mode");
        });
    });

    // Hamburger Menu Toggle (if available)
    if (hamburger && mobileNav) {
        hamburger.addEventListener("click", function () {
            mobileNav.classList.toggle("open");
        });

        // Close menu when clicking a link
        document.querySelectorAll(".mobile-nav a").forEach(link => {
            link.addEventListener("click", function () {
                mobileNav.classList.remove("open");
            });
        });
    }
});
