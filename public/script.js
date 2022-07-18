

new Swiper ('.image-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  grabCursor: true,
  slideToClickedSlide: true,
  hashNavigation: {
    watchState: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  autoHeight: false,
  slidesPerView: 1,
  watchOverflow: true,
  spaceBetween: 30,
  initialSlide: 1,
  loop: true,
  speed: 666,
  effect: 'fade',
  fadeEffect: {
    croddFade: true
  },
  // effect: 'cube',
  // cubeEffect: {
  //   sliderShadows: true,
  //   shadow: true,
  //   shadowOffset: 20,
  //   shadowScale: .94,

  // },
  // effect: 'coverflow',
  // coverflowEffect: {
  //   rotate: 20,
  //   stretch: 50,
  //   sliderShadows: true,
  // }, 
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   480: {
  //     slidesPerView: 2,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //   },
  // },
  zoom: {
    maxRatio: 4,
    minRatio: 1,
  },
  thumbs: {
    swiper: {
      el: '.image-mini-slider',
      slidesPerView: 12,
    }
  }


});
