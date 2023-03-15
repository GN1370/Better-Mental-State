const sliderImages = document.querySelector('.slider-images');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 1;
const size = sliderImages.children[0].clientWidth;

sliderImages.style.transform = `translateX(${-size * counter}px)`;

function slideNext() {
  if (counter >= sliderImages.children.length - 1) return;
  sliderImages.style.transition = "transform 0.5s ease-in-out";
  counter++;
  sliderImages.style.transform = `translateX(${-size * counter}px)`;
}

function slidePrev() {
  if (counter <= 0) return;
  sliderImages.style.transition = "transform 0.5s ease-in-out";
  counter--;
  sliderImages.style.transform = `translateX(${-size * counter}px)`;
}

nextBtn.addEventListener('click', slideNext);
prevBtn.addEventListener('click', slidePrev);

setInterval(() => {
  slideNext();
}, 7000);