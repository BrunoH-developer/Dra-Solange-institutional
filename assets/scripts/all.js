window.scroll({
    top: 0,
    behavior:'smooth',

}); 

const swiper = new Swiper('.swiper', {
    cssMode: true,
    loop: true,
    
    pagination:{
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 4000,
    },
    keyboard: true,
  });
