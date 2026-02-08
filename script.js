// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
});

// Show App functionality
function showApp() {
    alert('Welcome to ZenMeds! The app is launching...\n\nThis is a demo. Full functionality coming soon!');
    console.log('App launched');
}

// Contact Sales functionality
function contactSales() {
    const email = 'sales@zenmeds.com';
    const subject = 'Enterprise Plan Inquiry';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

// Add animation to elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and other elements
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card, .step, .testimonial, .pricing-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Form validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Newsletter subscription
function subscribeNewsletter(email) {
    if (validateEmail(email)) {
        alert('Thank you for subscribing!');
        return true;
    } else {
        alert('Please enter a valid email address');
        return false;
    }
}

// Mobile menu toggle (if you add a mobile menu later)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Pricing card selection
function selectPlan(planName) {
    console.log('Selected plan:', planName);
    showApp();
}

// Contact form submission
function submitContactForm(event) {
    if (event) {
        event.preventDefault();
    }

    const form = event ? event.target : document.querySelector('form');
    if (!form) return;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Validate form data
    if (!data.name || !data.email || !data.message) {
        alert('Please fill in all fields');
        return false;
    }

    if (!validateEmail(data.email)) {
        alert('Please enter a valid email address');
        return false;
    }

    // In a real application, this would send data to a server
    console.log('Form submitted:', data);
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
    return false;
}

// Initialize tooltips
function initializeTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltipText = this.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            tooltip.style.cssText = `
                position: absolute;
                background: #22543d;
                color: white;
                padding: 8px 12px;
                border-radius: 4px;
                font-size: 0.85rem;
                white-space: nowrap;
                z-index: 1000;
                top: ${this.offsetTop - 40}px;
                left: ${this.offsetLeft}px;
            `;
            document.body.appendChild(tooltip);

            this.addEventListener('mouseleave', function() {
                tooltip.remove();
            });
        });
    });
}

// Initialize on page load
window.addEventListener('load', function() {
    initializeTooltips();
    console.log('ZenMeds app initialized');
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key - close any modals/popups
    if (e.key === 'Escape') {
        // Add your modal closing logic here
        console.log('Escape key pressed');
    }
});

// Export functions for use in HTML
window.showApp = showApp;
window.contactSales = contactSales;
window.subscribeNewsletter = subscribeNewsletter;
window.toggleMobileMenu = toggleMobileMenu;
window.selectPlan = selectPlan;
window.submitContactForm = submitContactForm;
