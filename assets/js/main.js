function heroChange() {
    const heroImages = document.querySelectorAll('.hero-image');
    let currentImageIndex = 0;

    // Function to fade images
    function fadeImages() {
        heroImages[currentImageIndex].style.opacity = 0;
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroImages[currentImageIndex].style.opacity = 1;
    }

    // Call the fadeImages
    setInterval(fadeImages, 3000);
}

/* TESTIMONIALS SLIDER */
document.addEventListener('DOMContentLoaded', function () {
    const slider = tns({
        container: '.slider',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayButtonOutput: false,
        controls: false,
        nav: false,
        speed: 500,
    });
});