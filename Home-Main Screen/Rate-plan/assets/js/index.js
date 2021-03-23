var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 700,
      modifier: 1,
      slideShadows: true,
    }
  });