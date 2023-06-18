// smooth scrolling when clicking an anchor link

// Check if 'scrollIntoView' is supported by the browser
if ('scrollBehavior' in document.documentElement.style) {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}