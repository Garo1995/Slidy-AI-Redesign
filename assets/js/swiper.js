const swiper = new Swiper(".advantages-swiper", {
  spaceBetween: 10,
  slidesPerView:1,
   autoHeight: true,

  pagination: {
    el: ".advantages-swiper-pagination",
    clickable: true,
  },

});


const reviewsSwiper = new Swiper(".reviews-swiper", {
  spaceBetween: 10,
  slidesPerView:1,
    autoHeight: true,
  loop:true,
  pagination: {
    el: ".reviews-swiper-pagination",
    clickable: true,
  },

});


const historySwiper = new Swiper(".history-swiper", {
  spaceBetween: 10,
  slidesPerView:1,
    autoHeight: true,
  loop:true,
  pagination: {
    el: ".history-swiper-pagination",
    clickable: true,
  },

});



const speedsSwiper = new Swiper(".slidy-speeds-slider", {
  spaceBetween: 10,
  slidesPerView: 3,
  pagination: {
    el: ".slidy-pagination",
    clickable: true,
  },

  breakpoints: {
    '1199': {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    '767': {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    '640': {
      slidesPerGroup: 1,
      slidesPerView: 2,
      spaceBetween: 10,
    },
    '320': {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  },

});



const examplesSwiper = new Swiper(".life-examples-slider", {
  spaceBetween: 10,
  slidesPerView:1,
  pagination: {
    el: ".examples-pagination",
    clickable: true,
  },

});










const technologiesSwiper = new Swiper(".technologies-slider", {
  spaceBetween: 10,
  slidesPerView:3,
  pagination: {
    el: ".technologies-pagination",
    clickable: true,
  },

  breakpoints: {
    '1199': {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    '767': {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    '640': {
      slidesPerGroup: 1,
      slidesPerView: 2,
      spaceBetween: 10,
    },
    '320': {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  },
});






const startupsSwiper = new Swiper(".startups-slidy-slider", {
  spaceBetween: 10,
  slidesPerView:2,
  pagination: {
    el: ".startups-pagination",
    clickable: true,
  },

  breakpoints: {
    '767': {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    '640': {
      slidesPerGroup: 1,
      slidesPerView: 2,
      spaceBetween: 10,
    },
    '320': {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  },
});
const tempSwiper = new Swiper(".smart-temp-slider", {
  spaceBetween: 10,
  slidesPerView:2,
  pagination: {
    el: ".temp-pagination",
    clickable: true,
  },

  breakpoints: {
    '767': {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    '640': {
      slidesPerGroup: 1,
      slidesPerView: 2,
      spaceBetween: 10,
    },
    '320': {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  },
});

