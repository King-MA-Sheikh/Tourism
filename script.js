// Menu toggle functionality
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    
    // Sticky header
    let header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
    
    // Back to top button
    let backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 500) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
};

// Back to top functionality
document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize Swiper sliders
var destinationSwiper = new Swiper('.destination-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    }
});

var gallerySwiper = new Swiper('.gallery-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

var testimonialSwiper = new Swiper('.testimonial-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Login button functionality
document.querySelector('.login-btn').addEventListener('click', function() {
    alert('Login functionality would be implemented here!');
});

// Form submission handlers
document.querySelector('.booking-form .form-btn').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Searching for your dream destination...');
});

document.querySelector('.contact-form .submit-btn').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});

document.querySelector('.newsletter-form button').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.querySelector('.newsletter-form input').value;
    if (email) {
        alert(`Thank you for subscribing with: ${email}`);
        document.querySelector('.newsletter-form input').value = '';
    }
});

// Read more functionality
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.closest('.gallery-content').querySelector('p');
        if (content.style.webkitLineClamp) {
            content.style.webkitLineClamp = 'unset';
            this.textContent = 'Read less -';
        } else {
            content.style.webkitLineClamp = '3';
            this.textContent = 'Read more +';
        }
    });
});