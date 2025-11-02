/**
 * Shared Components Functionality
 * Handles search modal, floating buttons, and scroll behavior
 */

(function() {
    'use strict';

    // ==================== SEARCH MODAL ====================
    const searchModal = document.getElementById('searchModal');
    const quickSearch = document.querySelector('.quick-search');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');

    if (quickSearch && searchModal) {
        // Open search modal
        quickSearch.addEventListener('click', function() {
            searchModal.classList.add('active');
            setTimeout(() => {
                if (searchInput) searchInput.focus();
            }, 300);
        });
    }

    if (searchClose) {
        // Close search modal
        searchClose.addEventListener('click', function() {
            if (searchModal) {
                searchModal.classList.remove('active');
                if (searchInput) searchInput.value = '';
            }
        });
    }

    if (searchModal) {
        // Close modal when clicking outside
        searchModal.addEventListener('click', function(e) {
            if (e.target === searchModal) {
                searchModal.classList.remove('active');
                if (searchInput) searchInput.value = '';
            }
        });

        // Close modal with ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && searchModal.classList.contains('active')) {
                searchModal.classList.remove('active');
                if (searchInput) searchInput.value = '';
            }
        });
    }

    // Search suggestions click
    const searchSuggestions = document.querySelectorAll('.search-suggestions span');
    if (searchSuggestions.length > 0 && searchInput) {
        searchSuggestions.forEach(suggestion => {
            suggestion.addEventListener('click', function() {
                searchInput.value = this.textContent;
                searchInput.focus();
            });
        });
    }

    // ==================== FLOATING BUTTONS ====================
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const whatsappBtn = document.getElementById('whatsappBtn');

    // Scroll behavior for floating buttons
    if (scrollTopBtn || whatsappBtn) {
        window.addEventListener('scroll', function() {
            const shouldShow = window.scrollY > 300;
            
            if (scrollTopBtn) {
                if (shouldShow) {
                    scrollTopBtn.classList.add('show');
                } else {
                    scrollTopBtn.classList.remove('show');
                }
            }

            if (whatsappBtn) {
                if (shouldShow) {
                    whatsappBtn.classList.add('show');
                } else {
                    whatsappBtn.classList.remove('show');
                }
            }
        });
    }

    // Scroll to Top Function
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
})();


