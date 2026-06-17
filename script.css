const slides = [
{
    image:"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnhtNHFvcnNuYXN5Y2Q2dXlvbXFtd3VhcXk0MDRiMzFjNjNxMGg5MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tXL4FHPSnVJ0A/giphy.gif",
    title:"Project One",
    description:"Project One description..."
},
{
    image:"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHdod2tka3d2cnR2YnUzbTRxdDUydnU3ZGRpNjQ2Y3ZmajJ4Yjd3NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QZyBvNVaMbIZ9yadec/giphy.gif",
    title:"Project Two",
    description:"Project Two description..."
},
{
    image:"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXVlODF6ZzZydmF2dnh4YzQwZjNxYmw0MjV3bXhlMm56Mjl6dW5xbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZXKZWB13D6gFO/giphy.gif",
    title:"Project Three",
    description:"Project Three description..."
}
];

let current = 0;

function updateSlide(){

    document.getElementById("slideImage").src =
        slides[current].image;

    document.getElementById("slideTitle").textContent =
        slides[current].title;

    document.getElementById("slideDescription").textContent =
        slides[current].description;
}

function nextSlide(){
    current = (current + 1) % slides.length;
    updateSlide();
}

function prevSlide(){
    current = (current - 1 + slides.length) % slides.length;
    updateSlide();
}

updateSlide();
