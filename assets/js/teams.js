/**
 * Teams Page Functionality
 * Handles team search and testimonials carousel
 */

(function() {
    'use strict';

    // ==================== TEAM SEARCH ====================
    const searchInput = document.getElementById('searchInput');
    const teamCards = document.querySelectorAll('.team-card');
    const teamGrid = document.querySelector('.team-grid');
    
    // Create "No results" message element
    let noResultsMessage = null;

    // Function to create "No results" message
    function createNoResultsMessage() {
        if (noResultsMessage) return noResultsMessage;
        
        noResultsMessage = document.createElement('div');
        noResultsMessage.className = 'no-results-message';
        noResultsMessage.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: rgba(255, 255, 255, 0.7); grid-column: 1 / -1;">
                <i class="fa-solid fa-search" style="font-size: 48px; margin-bottom: 20px; opacity: 0.5;"></i>
                <h3 style="font-size: 24px; margin-bottom: 10px;">No Team Members Found</h3>
                <p style="font-size: 16px;">Try searching with different keywords</p>
            </div>
        `;
        return noResultsMessage;
    }

    // Function to search in team members
    function searchTeamMembers(searchTerm) {
        if (!teamCards.length) return;

        const term = searchTerm.toLowerCase().trim();
        let hasResults = false;

        // If search term is empty, show all team members
        if (term === '') {
            teamCards.forEach(card => {
                card.style.display = '';
            });
            
            // Remove no results message if exists
            if (noResultsMessage && noResultsMessage.parentNode) {
                noResultsMessage.parentNode.removeChild(noResultsMessage);
            }
            return;
        }

        // Search through each team card
        teamCards.forEach(card => {
            const name = card.querySelector('.team-name')?.textContent.toLowerCase() || '';
            const role = card.querySelector('.team-role')?.textContent.toLowerCase() || '';

            // Check if search term matches name or role
            const matchesName = name.includes(term);
            const matchesRole = role.includes(term);

            if (matchesName || matchesRole) {
                card.style.display = '';
                hasResults = true;
            } else {
                card.style.display = 'none';
            }
        });

        // Show or hide "no results" message
        if (teamGrid) {
            // Remove existing no results message if exists
            if (noResultsMessage && noResultsMessage.parentNode) {
                noResultsMessage.parentNode.removeChild(noResultsMessage);
            }

            // If no results, show message
            if (!hasResults) {
                const message = createNoResultsMessage();
                teamGrid.appendChild(message);
            }
        }
    }

    // Add event listener to search input
    if (searchInput) {
        // Search as user types (includes when suggestions update the value)
        searchInput.addEventListener('input', function(e) {
            searchTeamMembers(e.target.value);
        });

        // Also search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchTeamMembers(e.target.value);
            }
        });

        // Trigger search immediately if input has a value when page loads
        if (searchInput.value) {
            searchTeamMembers(searchInput.value);
        }
    }

    // ==================== TESTIMONIALS CAROUSEL ====================
    const testimonialTrack = document.querySelector('.testimonial-track');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    const prevBtn = document.querySelector('.prev-testimonial');
    const nextBtn = document.querySelector('.next-testimonial');
    const testimonialsContainer = document.querySelector('.testimonials-container');
    
    if (!testimonialTrack || testimonialCards.length === 0) return;

    let currentTestimonial = 0;
    const totalTestimonials = testimonialCards.length;
    let autoPlayInterval;

    // Function to update testimonial display
    function updateTestimonial(index) {
        // Remove active class from all cards and dots
        testimonialCards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current card and dot
        testimonialCards[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
        
        // Move the track
        testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
    }

    // Next testimonial
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        updateTestimonial(currentTestimonial);
    }

    // Previous testimonial
    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
        updateTestimonial(currentTestimonial);
    }

    // Event listeners for navigation buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextTestimonial();
            resetAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevTestimonial();
            resetAutoPlay();
        });
    }

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentTestimonial = index;
            updateTestimonial(currentTestimonial);
            resetAutoPlay();
        });
    });

    // Auto-play functionality
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextTestimonial, 5000); // Change every 5 seconds
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevTestimonial();
            resetAutoPlay();
        } else if (e.key === 'ArrowRight') {
            nextTestimonial();
            resetAutoPlay();
        }
    });

    // Touch/Swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    testimonialTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    testimonialTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left - next testimonial
            nextTestimonial();
            resetAutoPlay();
        }
        if (touchEndX > touchStartX + 50) {
            // Swipe right - previous testimonial
            prevTestimonial();
            resetAutoPlay();
        }
    }

    // Pause auto-play on hover
    if (testimonialsContainer) {
        testimonialsContainer.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });

        testimonialsContainer.addEventListener('mouseleave', () => {
            startAutoPlay();
        });
    }

    // Initialize testimonials
    updateTestimonial(0);
    startAutoPlay();
})();


