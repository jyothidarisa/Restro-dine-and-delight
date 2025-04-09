
// Amount selection functionality
document.querySelectorAll('.amount-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.amount-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        this.classList.add('selected');
        
        if (this.textContent === 'Other') {
            document.querySelector('.custom-amount').focus();
        } else {
            const amount = this.textContent.replace('$', '');
            document.querySelector('.custom-amount').value = amount;
        }
    });
});

// Animate progress bar on load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.querySelector('.progress').style.width = '56%';
    }, 500);
    
    // Add more floating hearts
    const header = document.querySelector('.header');
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('i');
        heart.className = 'heart-icon';
        
        `heart.style.left = ${Math.random() * 90 + 5}%;
        heart.style.top = ${Math.random() * 90 + 5}%;
        heart.style.animationDelay = ${Math.random() * 2}s;
        header.appendChild(heart);`
    }
})
