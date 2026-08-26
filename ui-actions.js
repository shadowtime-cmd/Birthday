/* =========================================================
   CINEMATIC BIRTHDAY - UI CONTROLLER (ui-actions.js)
========================================================= */

// 1. Page Navigation System
function nav(pageId) {
    // Find all sections with the class 'page' and hide them
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    
    // Find the specific page we want and show it
    document.getElementById(pageId).style.display = 'flex';
    
    // Scroll back to the top just in case
    window.scrollTo(0, 0);
}

// 2. Gift Box Logic & Teen Notes
const teenNotes = [
    "Happy Birthday! May your Wi-Fi be strong and your phone battery never die today. 📱✨",
    "Welcome to another year of surviving school! You're doing amazing. 🎒🎉",
    "Another year older, but still not old enough to pay the bills! Enjoy the free ride. 💸😎",
    "Happy Birthday! Sleep in, eat junk food, and blame it on growing! 🍕💤",
    "May your skin stay clear and your vibes stay immaculate all year long. ✨💅",
    "Wishing you awesome music, great friends, and absolutely zero homework today! 🎧🚫📚",
    "Here is to being a teenager! You're officially at the age where you know everything. 🙌",
    "Happy Birthday! Have a fantastic day, make crazy memories, and enjoy every second! 🎢😜"
];

function openGift(boxElement) {
    // Stop them from clicking the same box twice
    if (boxElement.classList.contains('opened')) return;

    // Pick a random note from the array above
    const randomNote = teenNotes[Math.floor(Math.random() * teenNotes.length)];
    
    // Visually change the box to look opened
    boxElement.innerHTML = '🎉';
    boxElement.classList.add('opened');
    boxElement.style.opacity = '0.4';
    boxElement.style.pointerEvents = 'none';

    // Show the birthday wish
    alert(randomNote);
}

// 3. Cinematic Cake Cut Sequence
let isCut = false;

function startCinematicCut() {
    // Prevent clicking multiple times
    if (isCut) return;
    isCut = true;

    // Hide the cut button immediately
    document.getElementById('cut-btn').style.display = 'none';

    // Grab the elements we need to animate
    const wrapper = document.getElementById('cake-wrapper');
    const topHalf = document.getElementById('cake-top-half');
    const kitties = document.getElementById('kitties');
    const title = document.getElementById('cake-title');

    // Step A: Trigger the violent CSS shake (Oggy style)
    wrapper.classList.add('tremble');

    // Step B: Wait 1.5 seconds for tension, then EXPLODE
    setTimeout(() => {
        // Stop shaking
        wrapper.classList.remove('tremble');
        
        // Hide the top half of the cake instantly
        topHalf.style.display = 'none';
        
        // Update the header text
        title.innerText = "🎉 SURPRISE! 🎉";

        // Call the mathematical physics engine (this lives in physics-engine.js)
        if (typeof triggerRealisticPhysics === 'function') {
            triggerRealisticPhysics();
        }

        // Step C: Wait a fraction of a second, then make the kittens rise from the base
        setTimeout(() => {
            kitties.classList.add('rise-up');
        }, 400);

    }, 1500);
}
