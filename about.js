// Animate elements when they come into view
document.addEventListener('DOMContentLoaded', function() {
    // Scroll animation
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-text, .about-image, .team-member, .stat-item, .testimonial');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };

    // Initialize scroll animation
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Animate stats counter
    const animateStats = function() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target') || 
                (counter.id === 'happy-customers' ? 12500 :
                 counter.id === 'dishes-served' ? 85000 :
                 counter.id === 'years-experience' ? 13 :
                 counter.id === 'awards-won' ? 8 : 0));
            
            const count = parseInt(counter.innerText);
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.floor(count + increment);
                setTimeout(animateStats, 1);
            } else {
                counter.innerText = target.toLocaleString();
            }
        });
    };

    // Start counter animation when stats section is in view
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});