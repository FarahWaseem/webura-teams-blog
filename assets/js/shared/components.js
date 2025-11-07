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
                // Trigger input event to fire search functionality
                searchInput.dispatchEvent(new Event('input', { bubbles: true }));
                searchInput.focus();
                performSearch(this.textContent);
            });
        });
    }

    // ==================== SEARCH FUNCTIONALITY ====================
    function performSearch(query) {
        try {
            if (!query || query.trim() === '') {
                clearSearchResults();
                return;
            }

            const searchQuery = query.toLowerCase().trim();
            const results = [];
            
            // Search in page content with error handling
            const searchableElements = document.querySelectorAll(`
                .section-title,
                .section-description,
                .service-card h3,
                .service-card p,
                .core-feature-card h3,
                .feature-text h4,
                .feature-text p,
                .blog-title,
                .blog-excerpt,
                .step-content h3,
                .step-content p,
                .hero-title,
                .hero-description,
                .project-title,
                .project-excerpt
            `);

            if (!searchableElements.length) {
                console.warn('No searchable elements found on page');
                return;
            }

            searchableElements.forEach(element => {
                try {
                    if (!element || !element.textContent) return;
                    
                    const text = element.textContent.toLowerCase();
                    if (text.includes(searchQuery)) {
                        const section = element.closest('section');
                        if (section) {
                            const sectionId = section.id || section.className.split(' ')[0] || 'unknown';
                            const titleElement = element.querySelector('h1, h2, h3, h4');
                            const title = titleElement?.textContent || 
                                       element.textContent.substring(0, 50).trim() + (element.textContent.length > 50 ? '...' : '');
                            
                            if (!results.find(r => r.sectionId === sectionId)) {
                                results.push({
                                    sectionId,
                                    title: title || 'Untitled',
                                    element: section,
                                    relevance: text.split(searchQuery).length - 1
                                });
                            }
                        }
                    }
                } catch (error) {
                    console.warn('Error processing search element:', error);
                }
            });

            displaySearchResults(results, searchQuery);
        } catch (error) {
            console.error('Error performing search:', error);
            clearSearchResults();
        }
    }

    function displaySearchResults(results, query) {
        try {
            // Remove existing results container
            const existingResults = document.querySelector('.search-results-container');
            if (existingResults) {
                existingResults.remove();
            }

            const searchContainer = document.querySelector('.search-container');
            if (!searchContainer) {
                console.warn('Search container not found');
                return;
            }

            if (results.length === 0) {
                const noResults = document.createElement('div');
                noResults.className = 'search-results-container';
                noResults.setAttribute('role', 'status');
                noResults.setAttribute('aria-live', 'polite');
                // Escape HTML to prevent XSS
                const escapedQuery = query.replace(/[&<>"']/g, (m) => {
                    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
                    return map[m];
                });
                noResults.innerHTML = `
                    <div class="search-no-results">
                        <i class="fa-solid fa-search" aria-hidden="true"></i>
                        <p>No results found for "${escapedQuery}"</p>
                        <span>Try different keywords</span>
                    </div>
                `;
                searchContainer.appendChild(noResults);
                return;
            }

            // Sort by relevance
            results.sort((a, b) => b.relevance - a.relevance);

            const resultsContainer = document.createElement('div');
            resultsContainer.className = 'search-results-container';
            resultsContainer.setAttribute('role', 'list');
            resultsContainer.setAttribute('aria-label', `Search results: ${results.length} found`);
            
            // Escape HTML in titles to prevent XSS
            const escapeHtml = (text) => {
                const div = document.createElement('div');
                div.textContent = text;
                return div.innerHTML;
            };

            resultsContainer.innerHTML = `
                <div class="search-results-header">
                    <span>Found ${results.length} result${results.length > 1 ? 's' : ''}</span>
                </div>
                <div class="search-results-list" role="list">
                    ${results.map((result, index) => `
                        <div class="search-result-item" 
                             role="listitem"
                             data-section="${escapeHtml(result.sectionId)}"
                             data-index="${index}"
                             tabindex="0"
                             aria-label="Search result: ${escapeHtml(result.title)}">
                            <div class="result-icon" aria-hidden="true">
                                <i class="fa-solid fa-file-lines"></i>
                            </div>
                            <div class="result-content">
                                <h4>${escapeHtml(result.title)}</h4>
                                <p>Section: ${escapeHtml(result.sectionId)}</p>
                            </div>
                            <div class="result-action" aria-hidden="true">
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;

            searchContainer.appendChild(resultsContainer);

            // Add click handlers to results with error handling
            resultsContainer.querySelectorAll('.search-result-item').forEach((item) => {
                const index = parseInt(item.getAttribute('data-index'), 10);
                const result = results[index];
                
                if (!result) return;

                const handleClick = () => {
                    try {
                        if (result.element) {
                            // Close search modal
                            if (searchModal) {
                                searchModal.classList.remove('active');
                            }
                            
                            // Scroll to section
                            requestAnimationFrame(() => {
                                result.element.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                                
                                // Highlight section briefly
                                const originalBg = result.element.style.backgroundColor;
                                result.element.style.transition = 'background-color 0.3s ease';
                                result.element.style.backgroundColor = 'rgba(50, 150, 250, 0.1)';
                                setTimeout(() => {
                                    result.element.style.backgroundColor = originalBg || '';
                                }, 2000);
                            });
                        }
                    } catch (error) {
                        console.error('Error navigating to search result:', error);
                    }
                };

                item.addEventListener('click', handleClick);
                item.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleClick();
                    }
                });
            });
        } catch (error) {
            console.error('Error displaying search results:', error);
        }
    }

    function clearSearchResults() {
        const existingResults = document.querySelector('.search-results-container');
        if (existingResults) {
            existingResults.remove();
        }
    }

    // Search input handler with debouncing
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function(e) {
            try {
                clearTimeout(searchTimeout);
                const query = this.value.trim();
                
                if (query.length >= 2) {
                    searchTimeout = setTimeout(() => {
                        performSearch(query);
                    }, 300);
                } else {
                    clearSearchResults();
                }
            } catch (error) {
                console.error('Error in search input handler:', error);
            }
        });

        // Handle Enter key
        searchInput.addEventListener('keypress', function(e) {
            try {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const query = this.value.trim();
                    if (query.length >= 2) {
                        performSearch(query);
                    }
                }
            } catch (error) {
                console.error('Error handling Enter key in search:', error);
            }
        });
    }

    // ==================== FLOATING BUTTONS ====================
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const whatsappBtn = document.getElementById('whatsappBtn');

    // Scroll behavior for floating buttons with throttling
    if (scrollTopBtn || whatsappBtn) {
        let ticking = false;
        
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    try {
                        const shouldShow = window.scrollY > 300;
                        
                        if (scrollTopBtn) {
                            scrollTopBtn.classList.toggle('show', shouldShow);
                        }

                        if (whatsappBtn) {
                            whatsappBtn.classList.toggle('show', shouldShow);
                        }
                        
                        ticking = false;
                    } catch (error) {
                        console.error('Error in scroll handler:', error);
                        ticking = false;
                    }
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
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

    // ==================== CONTACT US BUTTON ====================
    const contactUsBtn = document.getElementById('contactUsBtn');
    
    if (contactUsBtn) {
        contactUsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Try to find contact section on current page
            const contactSection = document.getElementById('contact') || 
                                  document.querySelector('.contact-section') ||
                                  document.querySelector('section.contact-section');
            
            if (contactSection) {
                // Scroll to contact section if it exists
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Optional: Focus on first input field after scroll
                setTimeout(() => {
                    const firstInput = contactSection.querySelector('input, textarea');
                    if (firstInput) {
                        firstInput.focus();
                    }
                }, 500);
            } else {
                // If no contact section, navigate to home page contact section
                const currentPath = window.location.pathname;
                const isHomePage = currentPath.endsWith('index.html') || 
                                 currentPath.endsWith('/') || 
                                 currentPath === '' ||
                                 currentPath.endsWith('webura/') ||
                                 currentPath.endsWith('webura-teams-blog/');
                
                if (!isHomePage) {
                    // Navigate to home page contact section
                    const homePath = currentPath.includes('html/') ? '../index.html#contact' : 'index.html#contact';
                    window.location.href = homePath;
                } else {
                    // If on home page but no contact section found, scroll to top
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
})();


