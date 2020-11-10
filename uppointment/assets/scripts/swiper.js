var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 40
        }
      },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  new WOW().init();