// Recommendation Engine
const recommendationData = {
    selections: {},
    recommendations: {
        "Italian-Romantic-Quick": {
            title: "Roman Holiday Experience",
            movie: "Roman Holiday (1953)",
            meal: "Antipasto platter with tiramisu",
            description: "A quick romantic escape with Audrey Hepburn and classic Italian flavors.",
            image: "https://images.unsplash.com/photo-1514944288352-fffac99f0bdf"
        },
        "Italian-Romantic-Standard": {
            title: "Cinema Paradiso Dinner",
            movie: "Cinema Paradiso (1988)",
            meal: "3-course Italian meal with wine pairing",
            description: "A nostalgic journey through Italian cinema and cuisine.",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
        },
        "Asian-Action-Quick": {
            title: "Kung Fu & Sushi",
            movie: "Crouching Tiger, Hidden Dragon (2000)",
            meal: "Sushi platter with edamame",
            description: "Fast-paced action paired with fresh Japanese flavors.",
            image: "https://images.unsplash.com/photo-1553621042-f6e147245754"
        },
        // Add more recommendation combinations as needed
    }
};

function selectOption(element, category, value) {
    // Remove selected class from all options in this category
    const options = element.parentElement.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    
    // Add selected class to clicked option
    element.classList.add('selected');
    
    // Store selection
    recommendationData.selections[category] = value;
}

function nextStep() {
    const currentStep = document.querySelector('.step.active');
    const nextStep = currentStep.nextElementSibling;
    
    if (nextStep && nextStep.classList.contains('step')) {
        currentStep.classList.remove('active');
        nextStep.classList.add('active');
    }
}

function prevStep() {
    const currentStep = document.querySelector('.step.active');
    const prevStep = currentStep.previousElementSibling;
    
    if (prevStep && prevStep.classList.contains('step')) {
        currentStep.classList.remove('active');
        prevStep.classList.add('active');
    }
}

function getRecommendation() {
   ` const { cuisine, mood, time } = recommendationData.selections;
    const key = ${cuisine}-${mood}-${time};`
    const recommendation = recommendationData.recommendations[key] || {
        title: "Custom Movie Dining Experience",
        movie: "Based on your preferences",
        meal: "Chef's special tasting menu",
        description: "Our chef recommends you to enjoy the divine taste of BROWNIE HOT FUDGE and chicken ghost biriyani",
        image: "https://tse3.mm.bing.net/th?id=OIP.k4xC3lQs22-ibkUtKVCYVAHaFj&pid=Api&P=0&h=180"
    };
    
    // Hide current step
    document.querySelector('.step.active').classList.remove('active');
    
    // Show result
    const resultStep = document.getElementById('resultStep');
    resultStep.classList.add('active');
    
    // Display recommendation
    const resultDiv = document.getElementById('recommendationResult');
    resultDiv.innerHTML = `
        <div style="background-color: #3d3d3d; padding: 20px; border-radius: 10px;">
            <h3>${recommendation.title}</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 20px; margin: 20px 0;">
                <div style="flex: 1; min-width: 200px;">
                    <img src="${recommendation.image}" alt="${recommendation.title}" style="width: 100%; border-radius: 5px;">
                </div>
                <div style="flex: 2; min-width: 200px;">
                    <p><strong>Featured Film:</strong> ${recommendation.movie}</p>
                    <p><strong>Meal Pairing:</strong> ${recommendation.meal}</p>
                    <p>${recommendation.description}</p>
                </div>
            </div>
            
        </div>
    `;
}

function restartRecommendation() {
    // Reset selections
    recommendationData.selections = {};
    
    // Remove selected classes
    document.querySelectorAll('.option.selected').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Go back to first step
    document.querySelector('.step.active').classList.remove('active');
    document.getElementById('step1').classList.add('active');
}

// Event Modal
function showEventModal(eventName) {
    const modal = document.getElementById('eventModal');
    document.getElementById('eventModalTitle').textContent = eventName;
    
    // In a real implementation, you would fetch event details from a database
    let eventDetails = '';
    switch(eventName) {
        case 'Marvel Movie Marathon':
            eventDetails = `
                <p><strong>Date:</strong> June 15, 2023</p>
                <p><strong>Time:</strong> 5:00 PM - Midnight</p>
                <p><strong>Location:</strong> Private Screening Room</p>
                <p>Join us for an epic marathon of Marvel movies including:</p>
                <ul>
                    <li>Avengers: Infinity War</li>
                    <li>Avengers: Endgame</li>
                    <li>Black Panther</li>
                </ul>
                <p>Special menu items:</p>
                <ul>
                    <li>Iron Man Burger (with glowing arc reactor bun)</li>
                    <li>Thor's Thunder Shake</li>
                    <li>Infinity Gauntlet Nachos</li>
                </ul>
                <p><strong>Price:</strong> $49.99 per person (all-you-can-eat)</p>
            `;
            break;
        case 'Oscar Winners Night':
            eventDetails = `
                <p><strong>Date:</strong> June 22, 2023</p>
                <p><strong>Time:</strong> 6:30 PM - 11:00 PM</p>
                <p>An elegant evening featuring:</p>
                <ul>
                    <li>The Godfather (Best Picture 1972)</li>
                    <li>Casablanca (Best Picture 1943)</li>
                </ul>
                <p>Gourmet 5-course meal with wine pairing</p>
                <p><strong>Price:</strong> $89.99 per person</p>
            `;
            break;
        case 'Anime & Sushi Night':
            eventDetails = `
                <p><strong>Date:</strong> June 29, 2023</p>
                <p><strong>Time:</strong> 7:00 PM - 10:00 PM</p>
                <p>Featured films:</p>
                <ul>
                    <li>Spirited Away</li>
                    <li>Your Name</li>
                </ul>
                <p>Authentic sushi and Japanese street food</p>
                <p><strong>Price:</strong> $39.99 per person</p>
            `;
            break;
        default:
            eventDetails = <p>Details for ${eventName} coming soon!</p>;
    }
    
    document.getElementById('eventModalContent').innerHTML = eventDetails;
    modal.style.display = 'flex';
}

function bookEvent() {
    const eventName = document.getElementById('eventModalTitle').textContent;
    showBookingModal(eventName);
    closeModal();
}

// Trailer Modal
function playTrailer() {
    const modal = document.getElementById('trailerModal');
    // In a real implementation, you would use the actual trailer embed URL
    document.getElementById('trailerVideo').src = "https://tse3.mm.bing.net/th?id=OIP.n0hiXYdhTGlLPtnoAt3S9AHaDt&pid=Api&P=0&h=180";
    modal.style.display = 'flex';
}
function playTrailer() {
const modal = document.getElementById('trailerModal');
const video = document.getElementById('trailerVideo');

// Example YouTube embed URL (replace VIDEO_ID with your actual video ID)
video.src = "3571264-uhd_3840_2160_30fps.mp4";
modal.style.display = 'flex';
}

function closeTrailer() {
    const modal = document.getElementById('trailerModal');
    document.getElementById('trailerVideo').src = "";
    modal.style.display = 'none';
}
function closeModal() {
const modal = document.getElementById('eventModal'); // Changed from 'closeModal' to 'eventModal'
modal.style.display = 'none';}