const track = document.getElementById("carouselTrack");

const slides = document.querySelectorAll(".slide");

let currentIndex = 0;

function updateCarousel() {

    track.style.transform =
        `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {

    currentIndex++;

    if(currentIndex >= slides.length){
        currentIndex = 0;
    }

    updateCarousel();
}

function prevSlide() {

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = slides.length - 1;
    }

    updateCarousel();
}
