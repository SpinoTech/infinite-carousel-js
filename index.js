const slider = document.querySelector(".slider");
const sections = slider.querySelectorAll("section");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

let currentIndex = 0;

function updateSliderPosition() {
    const slideWidth = sections[0].offsetWidth; // Assuming all sections have the same width
    const newPosition = -currentIndex * slideWidth;// whatever the indes will be that will be in front of the starting position that's why -currentIndex  used
    slider.style.transform = `translateX(${newPosition}px)`;
}

function goToNextSlide() {
    currentIndex = (currentIndex + 1) % sections.length;//finding the next index
    updateSliderPosition();//update the position
}

function goToPreviousSlide() {
    currentIndex = (currentIndex - 1 + sections.length) % sections.length;//finding the previous index
    updateSliderPosition();//update the position
    clearInterval(autoscrool)//stopping autoscrool when previous button clicked
}

leftButton.addEventListener("click", goToPreviousSlide);
rightButton.addEventListener("click", goToNextSlide);

// automatically scrooling
let autoscrool=setInterval(()=>{
    goToNextSlide();
},2000)

