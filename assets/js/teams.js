/**
 * Teams Page Functionality
 * Handles testimonials carousel
 */

(function() {
    'use strict';

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


