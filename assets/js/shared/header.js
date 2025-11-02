/**
 * Header Functionality
 * Handles mobile menu toggle and navigation
 */

(function() {
    'use strict';

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const floatingNav = document.getElementById('floatingNav');

    if (mobileMenuBtn && floatingNav) {
        mobileMenuBtn.addEventListener('click', function() {
            floatingNav.classList.toggle('active');
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && 
                !floatingNav.contains(e.target) && 
                floatingNav.classList.contains('active')) {
                floatingNav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
})();


