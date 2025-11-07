/**
 * Blog Page Functionality
 * Handles search functionality and blog post filtering
 */

(function() {
    'use strict';

    const searchInput = document.getElementById('searchInput');
    const blogCards = document.querySelectorAll('.blog-card');
    const blogGrid = document.querySelector('.blog-grid');
    
    // Create "No results" message element
    let noResultsMessage = null;

    // Function to create "No results" message
    function createNoResultsMessage() {
        if (noResultsMessage) return noResultsMessage;
        
        noResultsMessage = document.createElement('div');
        noResultsMessage.className = 'no-results-message';
        noResultsMessage.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: rgba(255, 255, 255, 0.7);">
                <i class="fa-solid fa-search" style="font-size: 48px; margin-bottom: 20px; opacity: 0.5;"></i>
                <h3 style="font-size: 24px; margin-bottom: 10px;">No Results Found</h3>
                <p style="font-size: 16px;">Try searching with different keywords</p>
            </div>
        `;
        return noResultsMessage;
    }

    // Function to search in blog posts
    function searchBlogPosts(searchTerm) {
        if (!blogCards.length) return;

        const term = searchTerm.toLowerCase().trim();
        let hasResults = false;

        // If search term is empty, show all posts
        if (term === '') {
            blogCards.forEach(card => {
                card.style.display = '';
            });
            
            // Remove no results message if exists
            if (noResultsMessage && noResultsMessage.parentNode) {
                noResultsMessage.parentNode.removeChild(noResultsMessage);
            }
            return;
        }

        // Search through each blog card
        blogCards.forEach(card => {
            const title = card.querySelector('.blog-title')?.textContent.toLowerCase() || '';
            const excerpt = card.querySelector('.blog-excerpt')?.textContent.toLowerCase() || '';
            const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
            const author = card.querySelector('.blog-meta span')?.textContent.toLowerCase() || '';

            // Check if search term matches title, excerpt, tags, or author
            const matchesTitle = title.includes(term);
            const matchesExcerpt = excerpt.includes(term);
            const matchesTags = tags.some(tag => tag.includes(term));
            const matchesAuthor = author.includes(term);

            if (matchesTitle || matchesExcerpt || matchesTags || matchesAuthor) {
                card.style.display = '';
                hasResults = true;
            } else {
                card.style.display = 'none';
            }
        });

        // Show or hide "no results" message
        if (blogGrid) {
            // Remove existing no results message if exists
            if (noResultsMessage && noResultsMessage.parentNode) {
                noResultsMessage.parentNode.removeChild(noResultsMessage);
            }

            // If no results, show message
            if (!hasResults) {
                const message = createNoResultsMessage();
                blogGrid.appendChild(message);
            }
        }
    }

    // Add event listener to search input
    if (searchInput) {
        // Search as user types (includes when suggestions update the value)
        searchInput.addEventListener('input', function(e) {
            searchBlogPosts(e.target.value);
        });

        // Also search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchBlogPosts(e.target.value);
            }
        });

        // Trigger search immediately if input has a value when page loads
        // (useful if user navigates back and input still has value)
        if (searchInput.value) {
            searchBlogPosts(searchInput.value);
        }
    }

    // Blog page initialized with search functionality
})();


