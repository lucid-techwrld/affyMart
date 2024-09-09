function showSidebar() {
  const show = document.querySelector('.navBar');
  show.style.display ='flex'
}

function closeSidebar() {
  const show = document.querySelector('.navBar');
  show.style.display ='none'
}

// JavaScript code to enable auto-scroll
const slider = document.querySelector('.slider');
let currentIndex = 0;
const totalSlides = slider.children.length;

function autoScroll() {
  currentIndex = (currentIndex + 1) % totalSlides;
  slider.scrollTo({
    left: slider.offsetWidth * currentIndex,
    behavior: 'smooth'
  });
}

// Set the interval to scroll every 3 seconds
setInterval(autoScroll, 3000);

function displayFilter() {
  const filter = document.querySelector('.filter-section');
  filter.style.display = 'flex'
}

function closeFilter() {
  const filter = document.querySelector('.filter-section');
  filter.style.display = 'none'
}
