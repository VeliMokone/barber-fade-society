// ============================================ //
// MOBILE MENU TOGGLE                          //
// ============================================ //

// This function shows/hides the navigation links on mobile
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}

// ============================================ //
// FADE-IN ANIMATION ON SCROLL                  //
// ============================================ //

// Select all elements with the 'fade-in' class
const faders = document.querySelectorAll('.fade-in');

// Options for when the animation triggers
const appearOptions = {
    threshold: 0.1,      // Triggers when 10% of element is visible
    rootMargin: "0px 0px -50px 0px"  // Triggers slightly before element enters view
};

// Create the observer
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');  // Add visible class to trigger animation
        appearOnScroll.unobserve(entry.target); // Stop observing once animated
    });
}, appearOptions);

// Observe each fade-in element
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// ============================================ //
// CLOSE MOBILE MENU WHEN CLICKING A LINK       //
// ============================================ //

// Get all navigation links
const navLinksList = document.querySelectorAll('.nav-links a');

// Add click event to each link
navLinksList.forEach(link => {
    link.addEventListener('click', () => {
        // Close the mobile menu
        document.getElementById('navLinks').classList.remove('show');
    });
});

// ============================================ //
// SMOOTH SCROLLING FOR NAVIGATION LINKS        //
// ============================================ //

// Get all anchor links that start with #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only apply to internal links (not WhatsApp links)
        if (href !== '#' && href !== '#home' && href !== '#services' && 
            href !== '#gallery' && href !== '#about') {
            return;
        }
        
        e.preventDefault();
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});