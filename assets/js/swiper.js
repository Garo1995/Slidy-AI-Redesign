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
















let sampleSmSwiper = new Swiper(".sample-sm-slid", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".sample-pagination",
    clickable: true,
  },
  breakpoints: {
    '767': {
      spaceBetween: 10,
      slidesPerView: 4,
    },
    '570': {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true
    },
    '320': {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true
    },
  },
});
let sampleBigSwiper = new Swiper(".sample-big-slid", {
  loop: true,
  spaceBetween: 10,

  thumbs: {
    swiper: sampleSmSwiper,
  },
});








const technicalSwiper = new Swiper(".technical-slider", {
  spaceBetween: 10,
  slidesPerView:2,
  pagination: {
    el: ".technical-pagination",
    clickable: true,
  },

  breakpoints: {
    '767': {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    '570': {

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

const previewSwiper = new Swiper(".preview-swiper", {
  spaceBetween: 9,
  slidesPerView:4,
  pagination: {
    el: ".preview-pagination",
    clickable: true,
  },

  breakpoints: {
    '1020': {
      slidesPerView: 4,
      spaceBetween: 9,
    },
    '767': {
      slidesPerView: 2,
      spaceBetween: 9,
    },
    '570': {
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







const simiSwiper = new Swiper(".similar-templates-slider", {
  spaceBetween: 10,
  slidesPerView:3,
  pagination: {
    el: ".similar-pagination",
    clickable: true,
  },

  breakpoints: {
    '1020': {
      spaceBetween: 10,
      slidesPerView:3,
    },
    '767': {
      spaceBetween: 10,
      slidesPerView:2,
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


const collectionSwiper = new Swiper(".collection-slider", {
  spaceBetween: 10,
  slidesPerView:2,
  pagination: {
    el: ".collection-pagination",
    clickable: true,
  },

  breakpoints: {
    '1020': {
      spaceBetween: 10,
      slidesPerView:2,
    },
    '767': {
      spaceBetween: 10,
      slidesPerView:2,
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


const businessesSwiper = new Swiper(".businesses-slider", {
  spaceBetween: 9,
  slidesPerView:3,
  pagination: {
    el: ".businesses-pagination",
    clickable: true,
  },

  breakpoints: {
    '1020': {
      spaceBetween: 9,
      slidesPerView:3,
      enabled: false,

    },
    '767': {
      spaceBetween: 10,
      slidesPerView:2,
      enabled: true,


    },
    '640': {
      slidesPerGroup: 1,
      slidesPerView: 2,
      spaceBetween: 10,
      enabled: true,

    },
    '320': {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
      enabled: true,

    },
  },
});




const securitySwiper = new Swiper(".security-slider", {
  spaceBetween: 9,
  slidesPerView:2,
  pagination: {
    el: ".security-pagination",
    clickable: true,
  },

  breakpoints: {
    '1020': {
      spaceBetween: 9,
      slidesPerView:2,
    },
    '767': {
      spaceBetween: 10,
      slidesPerView:2,
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



const accessSwiper = new Swiper(".access-control-slider", {
  spaceBetween: 10,
  slidesPerView:3,
  pagination: {
    el: ".access-pagination",
    clickable: true,
  },

  breakpoints: {
    '1020': {
      spaceBetween: 10,
      slidesPerView:3,
    },
    '767': {
      spaceBetween: 10,
      slidesPerView:2,
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

const legalSwiper = new Swiper(".legal-documents-slid", {
  spaceBetween: 10,
  slidesPerView:3,
  pagination: {
    el: ".legal-pagination",
    clickable: true,
  },

  breakpoints: {
    '1020': {
      spaceBetween: 10,
      slidesPerView:3,
      enabled: false,

    },
    '767': {
      spaceBetween: 10,
      slidesPerView:2,
      enabled: true,

    },
    '640': {
      slidesPerGroup: 1,
      slidesPerView: 2,
      spaceBetween: 10,
      enabled: true,

    },
    '320': {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
      enabled: true,

    },
  },
});