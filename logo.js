// Animate progress bar
let progress = 0;
const progressBar = document.getElementById('progressBar');
const interval = setInterval(() => {
   ` progress += 1;
    progressBar.style.width = ${progress}%;`
    
    if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
            window.location.href = "home.html"; // Change to your main page
        }, 500);
    }
}, 50);

// Create floating elements
const icons = ['🍕', '🎬', '🍿', '🍔', '📽', '🍣'];
for (let i = 0; i < 15; i++) {
   ` const floater = document.createElement('div');
    floater.className = 'floater';
    floater.textContent = icons[Math.floor(Math.random() * icons.length)];
    floater.style.left = ${Math.random() * 100}%;
    floater.style.top = ${Math.random() * 100 + 100}%;
    floater.style.fontSize = ${Math.random() * 20 + 15}px;
    floater.style.animationDuration = ${Math.random() * 15 + 5}s;
    document.body.appendChild(floater);`
}