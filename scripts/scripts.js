document.addEventListener("DOMContentLoaded", function () {
    
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.6}
    );

    revealElements.forEach((element) => observer.observe(element));
});