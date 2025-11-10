let buttonClickCount = 0; // Variable to track button clicks

const randomPhotoPaths = [
    "Images/memory1.jpg", 
    "Images/memory2.jpg", 
    "Images/memory3.jpg", 
    "Images/memory4.jpg", 
    "Images/memory5.jpg", 
    "Images/memory6.jpg", 
    "Images/memory7.jpg", 
    "Images/memory8.jpg", 
    "Images/memory9.jpg", 
    "Images/memory10.jpg" 
];

/**
 * Handles the password check for the first section.
 */
function checkPassword() {
    const passwordInput = document.getElementById('password-input');
    const message = document.getElementById('password-message');
    const password = passwordInput.value;
    const correctPassword = '8911'; // The special date: 8th November (or 9th, depending on interpretation, but using 8911 as requested)

    if (password === correctPassword) {
        document.getElementById('password-section').classList.add('hidden');
        document.getElementById('welcome-section').classList.remove('hidden');
        message.textContent = ''; // Clear any previous error message
    } else {
        message.textContent = "Nope, you are wrong. Try again, my sweetheart!";
    }
    passwordInput.value = ''; // Clear the input
}

/**
 * Displays the password hint.
 */
function showHint() {
    const message = document.getElementById('password-message');
    message.textContent = "Hint: It is a very special day for my beautiful sweetheart. (DDMM format)";
}

/**
 * Navigates to the next section and tracks the button pressed.
 * @param {string} nextSectionId - The ID of the section to show next.
 * @param {string} buttonValue - The value/text of the button pressed.
 */
function nextSection(nextSectionId, buttonValue) {
    // 1. Hide the current section (assuming it's the one before the nextSectionId)
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (!section.classList.contains('hidden') && section.id !== nextSectionId) {
            section.classList.add('hidden');
        }
    });

    // 2. Show the next section
    const nextSection = document.getElementById(nextSectionId);
    nextSection.classList.remove('hidden');

    // 3. Track button click
    buttonClickCount++;
    console.log(`Button Click #${buttonClickCount}: ${buttonValue}`);
    
    // 4. Handle special section logic
    if (nextSectionId === 'meeting-section') {
        // Delay the animation slightly to ensure the section is visible
        setTimeout(() => {
            document.querySelector('.meeting-animation-container').classList.add('animate-meet');
        }, 500);
    }
}

/**
 * Initiates the time travel animation sequence.
 */
function initiateTravel() {
    // Hide the "Start Travel" button and show the time machine
    document.getElementById('start-travel-button-container').classList.add('hidden');
    document.getElementById('time-machine').classList.remove('hidden');

    // Start the animation
    startTravelAnimation();
}

/**
 * Animates the date change for the time travel section.
 */
function startTravelAnimation() {
    const currentDateElement = document.getElementById('current-date');
    const travelBar = document.querySelector('.travel-bar');
    const targetDate = '22nd October 2025';

    // Set the initial date to today's date (or any recent date)
    currentDateElement.textContent = new Date().toLocaleDateString('en-GB', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    // Start the progress bar animation
    setTimeout(() => {
        travelBar.style.width = '100%';
    }, 100);

    // After the animation duration, show the final message and date
    setTimeout(() => {
        currentDateElement.textContent = targetDate;
        document.querySelector('.travel-message').textContent = 'Time Warp Complete!';
        document.getElementById('travel-complete-message').classList.remove('hidden');
        document.getElementById('travel-buttons').classList.remove('hidden');
        travelBar.style.backgroundColor = '#4caf50'; // Change color on complete
    }, 3200); // 3200ms matches the CSS transition time + a small buffer
}

function changeRandomPhoto() {
    const memoryPhoto = document.getElementById('memory-photo');
    const randomIndex = Math.floor(Math.random() * randomPhotoPaths.length);
    const newPath = randomPhotoPaths[randomIndex];

    // Optional: Add a transition class for a subtle effect
    memoryPhoto.classList.add('fade-out'); 

    setTimeout(() => {
        memoryPhoto.src = newPath;
        memoryPhoto.alt = `Romantic memory photo #${randomIndex + 1}`;
        memoryPhoto.classList.remove('fade-out');
    }, 300); // Wait for the fade-out to complete before changing source
}

// Ensure the time travel section starts with the current date when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Hide all sections except the password section initially
    document.querySelectorAll('section:not(#password-section)').forEach(section => {
        section.classList.add('hidden');
    });

    // Initialize the date in the travel section
    document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-GB', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
});