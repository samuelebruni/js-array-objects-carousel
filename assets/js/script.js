

/* Define the slides list */
const slides = [
  './assets/img/01.webp', //0
  './assets/img/02.webp', //1
  './assets/img/03.webp', //etc
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

scrollImg();

prevEl.addEventListener('click', function () {
  console.log('cliccato su prev');

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
})


document.querySelector('button').addEventListener('click', switchImg);



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

function switchImg() {
  setInterval(function () {
    scrollImg();
  }, 2500);
}