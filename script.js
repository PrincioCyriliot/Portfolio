// Sélection des éléments
const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');

        // Si c'est une ancre interne (ex: #contact sur index.html)
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.slice(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // Sinon, le navigateur chargera naturellement la nouvelle page (ex: service.html)
    });
});
