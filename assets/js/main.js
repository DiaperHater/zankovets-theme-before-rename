"use strict";

// document onscroll
(function () {

  let lastKnownScrollPosition = 0;
  let ticking = false;

  function narrowHeaderOnScroll(scrollPos) {

    const headerHeight = document.querySelector('header').offsetHeight;
    const header = document.querySelector('header');

    if (window.scrollY > headerHeight) {
      if (!header.classList.contains('narrow')) {
        header.classList.add('narrow');
      }
    } else {
      header.classList.remove('narrow');
    }
  }

  document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        narrowHeaderOnScroll(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  });
})();

// Swiper
(function () {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    freeMode: {
      enabled: true,
      sticky: false
    },
    mousewheel: {
      forceToAxis: true,
      releaseOnEdges: true
    },
    speed: 5000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    breakpoints: {
      375: {
        slidesPerView: 4
      },
      640: {
        slidesPerView: 6,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 56,
      },
      1280: {
        slidesPerView: 6,
        spaceBetween: 120,
      },
    }
  });
})();

function burgerOnClick() {

  toggleBurger();
  toggleMobileMenu();
}

function toggleBurger() {
  const burger = document.querySelector('.burger');
  burger.classList.toggle('active');
}

function toggleMobileMenu() {

  const menu = document.querySelector('.mobile-menu');
  menu.classList.toggle('left-full');
  menu.classList.toggle('left-0');
}

function playPauseVideo(player) {

  const video = player.querySelector('video');
  const playBtn = player.querySelector('button');

  // If video loaded played and not paused
  if (video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2) {

    video.pause();

    // show btn
    playBtn.classList.remove('hidden');

  } else {

    video.play();

    // if button is not hidden
    if (!playBtn.classList.contains('hidden')) {

      // hide btn
      playBtn.classList.add('hidden');
    }
  }

}