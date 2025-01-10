document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".slider-image");
    let currentIndex = 0;

    function changeSlide() {
        const currentImage = images[currentIndex];
        currentImage.classList.remove("active");

        currentIndex = (currentIndex + 1) % images.length;
        const nextImage = images[currentIndex];
        nextImage.classList.add("active");
    }

    images[0].classList.add("active"); 
    setInterval(changeSlide, 5000); 
});
