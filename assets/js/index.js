//scroll bar
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("#bottom-nav-menu").addClass("fixed-top");
    $("#gotoTop").show();
  } else {
    $("#bottom-nav-menu").removeClass("fixed-top");
    $("#gotoTop").hide();
  }
});

//scroll top
function clickTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 2,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
