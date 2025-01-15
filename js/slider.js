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
    function updateImages() {
        const isMobile = window.innerWidth <= 540;
    
        images.forEach((image, index) => {
          if (isMobile) {
            image.src = `./assets/mobile${index + 1}.png`;
          } else {
            image.src = `./assets/desktop${index + 1}.png`;
          }
        });
      }
    
      // Llama a la función al cargar la página y al redimensionar
      updateImages();
      window.addEventListener("resize", updateImages);

    images[0].classList.add("active"); 
    setInterval(changeSlide, 3500); 
});


