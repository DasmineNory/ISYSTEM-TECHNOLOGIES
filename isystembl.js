// JavaScript for interactivity and animations

document.addEventListener("DOMContentLoaded", () => {
    // Add hover effect to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.9)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.7)';
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add button click effect
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for clicking! This button can be linked to a purchase page or additional functionality.');
        });
    });
});

const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggles menu visibility
});


