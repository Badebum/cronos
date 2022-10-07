"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const swiperSpecialists = new Swiper(".swiper__specialists", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    centerInsufficientSlides: false,
    loopedSlides: 2,
    loop: true,
    simulateTouch: true,
    breakpoints: {
      480: {
        slidesPerView: 2,
        loop: true,

      },
      768: {
        slidesPerView: 3,
        loop: true,
      },
      1025: {
        slidesPerView: 3,
        loop: false,

      },

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const swiperEquipment = new Swiper(".swiper__equipment", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    centerInsufficientSlides: false,
    loopedSlides: 2,
    loop: true,
    simulateTouch: true,
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      // 1025: {
      //     slidesPerView: 3,
      //     direction: "vertical",
      //     spaceBetween: 38,
      //     loopedSlides: 4,
      //     loop: false,
      // },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
