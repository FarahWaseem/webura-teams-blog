// FAQ Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // FAQ search functionality
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                // Filter FAQ items based on search query
                filterFAQs(query);
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    filterFAQs(query);
                }
            }
        });
    }
    
    function filterFAQs(query) {
        const faqItems = document.querySelectorAll('.faq-item');
        const searchTerm = query.toLowerCase();
        
        faqItems.forEach(item => {
            const title = item.querySelector('.faq-title').textContent.toLowerCase();
            const content = item.querySelector('.faq-content').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                item.style.display = 'block';
                // Auto-expand matching FAQ
                const radio = item.querySelector('input[type="radio"]');
                if (radio) {
                    radio.checked = true;
                }
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    // Clear search on input clear
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            if (this.value.trim() === '') {
                const faqItems = document.querySelectorAll('.faq-item');
                faqItems.forEach(item => {
                    item.style.display = 'block';
                });
            }
        });
    }
    
    // FAQ page initialized
});

