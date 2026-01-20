// Simple scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Initial fade in for hero
    document.querySelector('.hero-content').classList.add('visible');

    // Add fade-in class to major sections
    const animateElements = document.querySelectorAll('.glass-card, .feature-card, .timeline-item, .contact-container, .section-title');
    animateElements.forEach(el => {
        el.classList.add('fade-in-section');
        observer.observe(el);
    });
});
