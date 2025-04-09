document.addEventListener('DOMContentLoaded', function() {
    // Confetti animation
    function createConfetti() {
        const colors = ['#4CAF50', '#2196F3', '#FFC107', '#FF5722', '#9C27B0'];
        const container = document.body;
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = -10 + 'px';
            container.appendChild(confetti);
            
            const animationDuration = Math.random() * 3 + 2;
            
            confetti.animate([
                { 
                    transform: `translate(${Math.random() * 200 - 100}px, ${window.innerHeight}px) rotate(${Math.random() * 360}deg)`,
                    opacity: 1,
                    width: Math.random() * 10 + 5 + 'px',
                    height: Math.random() * 10 + 5 + 'px'
                }
            ], {
                duration: animationDuration * 1000,
                easing: 'cubic-bezier(0.1, 0.8, 0.9, 1)',
                delay: Math.random() * 2000
            });
        }
    }
    // Start confetti after a slight delay
    setTimeout(createConfetti, 1000);
    
    // Add a slight delay to each transaction detail row for animation
    const detailRows = document.querySelectorAll('.detail-row');
    detailRows.forEach((row, index) => {
        row.style.opacity = '0';
        row.style.transform = 'translateY(20px)';
        row.style.transition = `all 0.5s ease ${index * 0.1 + 1.5}s`;
        setTimeout(() => {
            row.style.opacity = '1';
            row.style.transform = 'translateY(0)';
        }, 100);
    });
});