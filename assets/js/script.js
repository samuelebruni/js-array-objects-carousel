


const slides = [
  './assets/img/01.webp', 
  './assets/img/02.webp',
  './assets/img/03.webp', 
  './assets/img/04.webp',
  './assets/img/05.webp',
]

let activeSlide = 0;

const sliderImagesEl = document.querySelector('.slider .images')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')
 
for (let i = 0; i < slides.length; i++) {
  const slidePath = slides[i];
  const slideMarkup = `<img class="${activeSlide === i ? 'active' : '' }" src="${slidePath}" alt="">`
  sliderImagesEl.insertAdjacentHTML('beforeend', slideMarkup)
}

const slidesImages = document.querySelectorAll('.slider .images > img')
console.log(slidesImages);

const thumbsElement = document.querySelector('.thumbnails')

for (let i = 0; i < slides.length; i++) {
  const thumbPath = slides[i];
  const thumbMarkup = `<img class="thumb ${activeSlide === i ? 'active' : ''}" src="${thumbPath}" alt="">`
  thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup)
}

nextEl.addEventListener('click', scrollImg);

prevEl.addEventListener('click', reverseDirection);
  


document.querySelector('button').addEventListener('click', function(){
  switchImg('next');
});
document.getElementById('reverse').addEventListener('click', function (){
  switchImg('prev');
});







function scrollImg() {
    const currentSlide = slidesImages[activeSlide]
    currentSlide.classList.remove('active')
  
    const currentThumb = document.querySelector('.thumbnails > img.active')
    currentThumb.classList.remove('active')
  
    if (activeSlide === slidesImages.length - 1) {
      activeSlide = 0
    } else {
      activeSlide++
    }
  
    const nextSlide = slidesImages[activeSlide]
    nextSlide.classList.add('active')
  
    const nextThumb = document.querySelectorAll('.thumb')[activeSlide]
    nextThumb.classList.add('active') 
}

function reverseDirection() {
  const currentSlide = slidesImages[activeSlide]
  console.log(currentSlide);
  currentSlide.classList.remove('active')

  if (activeSlide === 0) {
    activeSlide = slidesImages.length - 1
  } else {
      activeSlide--
  }
  
  console.log(activeSlide);

  const nextSlide = slidesImages[activeSlide]
  console.log(nextSlide);
  nextSlide.classList.add('active')
}

let next;
let prev;

function switchImg(direction) {
  
   if (direction === 'next'){
    clearInterval(prev);
    next = setInterval(function(){
      scrollImg()}, 2500)
   } else {
    clearInterval(next);
    prev = setInterval(function(){
    reverseDirection()}, 2500)
   }
}
