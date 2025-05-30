
  const toggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      640: { slidesPerView: 2.5 },
      768: { slidesPerView: 3 },
    },
  });