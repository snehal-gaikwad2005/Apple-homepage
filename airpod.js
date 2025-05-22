// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Open mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        });
    }
    
    // Close mobile menu
    if (closeMenu) {
        closeMenu.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        });
    }
    
    // Close menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-menu-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Country selector functionality
    const continueBtn = document.querySelector('.continue-btn');
    const closeCountrySelector = document.querySelector('.close-btn');
    const countrySelector = document.getElementById('country-selector');

    if (continueBtn) {
        continueBtn.addEventListener('click', function() {
            if (countrySelector) {
                countrySelector.style.display = 'none';
            }
        });
    }

    if (closeCountrySelector) {
        closeCountrySelector.addEventListener('click', function() {
            if (countrySelector) {
                countrySelector.style.display = 'none';
            }
        });
    }
});

// Sticky Navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav-container');
    if (nav) {
        if (window.scrollY > 10) {
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// AirPods Products Animation
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .feature-item, .compare-item, .accessory-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.feature-card, .feature-item, .compare-item, .accessory-item');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run once on load
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
});

// Hero parallax effect
window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const scrollPosition = window.scrollY;
        if (scrollPosition < 600) {
            const parallaxValue = scrollPosition * 0.15;
            heroSection.style.backgroundPosition = `center ${50 + parallaxValue}%`;
        }
    }
});