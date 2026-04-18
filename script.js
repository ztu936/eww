const slider = document.getElementById('slider');
const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let current = 0;
function showPage(index) {
  pages[current].classList.remove('active');
  current = index;
  pages[current].classList.add('active');
  slider.style.transform = `translateX(-${current * 100}vw)`;
}
prevBtn.addEventListener('click', () => {
  if (current > 0) showPage(current - 1);
});
nextBtn.addEventListener('click', () => {
  if (current < pages.length - 1) showPage(current + 1);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && current > 0) showPage(current - 1);
  if (e.key === 'ArrowRight' && current < pages.length - 1) showPage(current + 1);
});
let startX = 0;
slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
slider.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50 && current < pages.length - 1) {
    showPage(current + 1);
  }
  if (endX - startX > 50 && current > 0) {
    showPage(current - 1);
  }
});
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});
