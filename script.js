document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");

    window.addEventListener("scroll", function() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });

        setActiveLink(currentSection);
    });

    function setActiveLink(currentSection) {
        const links = document.querySelectorAll(".nav-link");
        links.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("data-section") === currentSection) {
                link.classList.add("active");
            }
        });
    }
});
