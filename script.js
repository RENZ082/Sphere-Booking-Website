let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden'); // Hide navbar
    } else {
        navbar.classList.remove('hidden'); // Show navbar
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
    
    document.addEventListener("DOMContentLoaded", function() {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.addEventListener("click", function() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    });

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

//   BACKGROUND
  ScrollReveal().reveal(".header-background h1", {
    ...scrollRevealOption,

  });

  ScrollReveal().reveal(".header-background p", {
    ...scrollRevealOption,
    delay: 200,
  });

  // //   BACKGROUND2
  // ScrollReveal().reveal(".header-background2 h1", {
  //   ...scrollRevealOption,

  // });

  // ScrollReveal().reveal(".header-background2 p", {
  //   ...scrollRevealOption,
  //   delay: 200,
  // });

// CITIES
  ScrollReveal().reveal(".section__subheader", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".section__header", {
    ...scrollRevealOption,
    origin: "right",
    delay: 300,
  });

// ROOM
  ScrollReveal().reveal(".section__subheader2", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".section__header2", {
    ...scrollRevealOption,
    // origin: "right",
    delay: 300
  });

  // ROOM
  ScrollReveal().reveal(".owl-carousel", {
    ...scrollRevealOption,
    delay: 320,
  });

  // SERVICES
  ScrollReveal().reveal(".section__subheader3", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".section__header3", {
    ...scrollRevealOption,
    origin: "right",
    delay: 300,
  });

  // ABOUT
  ScrollReveal().reveal(".section__subheader4", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".about__image2", {
    ...scrollRevealOption,
    origin: "right",
  });

  // service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 350,
  origin: "right",
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 150,
});


// city card
$('.city__grid').owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        dots: false,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          576: {
            items: 2
          },
          768: {
            items: 3
          },
          1000: {
            items: 4
          }
        }
      })

// room card
$('.room__grid').owlCarousel({
  loop: false,
  margin: 20,
  nav: true,
  dots: false,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
})
