// Nav__link add 'active' for current link by click
const links = document.querySelectorAll('.nav__link');

links.forEach(item => {

  item.addEventListener('click', (e) => {

    links.forEach(el => {
      el.classList.remove('is--active');
    });

    item.classList.add('is--active');

  });

});



const list = document.querySelectorAll('.CatalogMenu li a')
 list.forEach(item =>{
        item.addEventListener('click', (e) =>{
        list.forEach(el=>{ el.classList.remove('active'); });
        item.classList.add('active')
    })
})



// Burger and mobile-nav
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');

function burgerMenu() {
  burger.addEventListener('click', event => {
    burger.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });
}

burgerMenu();



// Show Scroll-up
const scrollUp = document.querySelector('.btn--scrollup');
const btnContact = document.querySelector('.btn--contact');

// Show btn--scrollup and move it when we get to the bottom of the page
window.onload = () => {

  window.onscroll = () => {
    if (window.scrollY > 2280) {
      scrollUp.classList.add('show');
    } else if (window.scrollY < 2280) {
      scrollUp.classList.remove('show');
    }

    moveBtnContact();
    moveScrollup();
  };

  scrollUp.onclick = () => {
    window.scrollTo(0, 0);
  };

};

// Move our btns when we get to the bottom of page
function moveBtnContact() {
  if (window.scrollY + 1 >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
    btnContact.classList.add('scrolled');
  } else if (window.scrollY < document.documentElement.scrollHeight - document.documentElement.clientHeight) {
    btnContact.classList.remove('scrolled');
  }
};

function moveScrollup() {
  if (window.scrollY + 1 >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
    scrollUp.classList.add('scrolled');
  } else if (window.scrollY < document.documentElement.scrollHeight - document.documentElement.clientHeight) {
    scrollUp.classList.remove('scrolled');
  }
};




// Modals
const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');
const btnHero = document.querySelector('.btn--hero');

modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        let modalContent = modal.querySelector('.modal__content');


        // Add 'no-scroll for body if we open fullscreen modal
        if (item.classList.contains('btn--hero')) {

          modal.addEventListener('click', event => {
            event.stopPropagation();
          });

          setTimeout(() => {
            modal.classList.add('show');
          }, 300);

          body.classList.add('no-scroll');

          setTimeout(function(){
              modalContent.style.transform = 'none';
              modalContent.style.opacity = '1';
          }, 2);
        } else {
          modal.addEventListener('click', event => {
            event.stopPropagation();
          });

          setTimeout(() => {
            modal.classList.add('show');
          }, 300);

          setTimeout(function(){
              modalContent.style.transform = 'none';
              modalContent.style.opacity = '1';
          }, 2);
        }

    });
});

modalClose.forEach(item => {

    item.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.modal');

        closeModal(currentModal);
    });

});

modal.forEach(item => {

    item.addEventListener('click', event => {
      let currentModal = event.target;

      closeModal(currentModal);
    });

});


function closeModal(currentModal) {
  let modalContent = currentModal.querySelector('.modal__content');
  currentModal.removeAttribute('style');

  setTimeout(() => {
    if (modalContent.classList.contains('fullscreen')){
      currentModal.classList.remove('show');
      body.classList.remove('no-scroll');
    } else {
      currentModal.classList.remove('show');
    }
  }, 300);
};




// Slider Works
const sliderWorks = new Swiper(".slider--works", {
    slidesPerView: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
  });


//   Slider Reviews
  const sliderReviews = new Swiper(".slider--reviews", {
    slidesPerView: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });

//  Slider Blog
  const sliderBlog = new Swiper(".slider--blog", {
    slidesPerView: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
  });