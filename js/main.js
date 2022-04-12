window.onload = function () {
    document.body.classList.add('hidden');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('hidden');
    }, 500);
}

const swiper = new Swiper('.swiper', {
    effect: "fade",
    zoom: true,
    loop: true,
    lazy: true,
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });