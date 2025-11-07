/**
 * Project Page JavaScript
 * Enhanced with error handling, performance optimizations, and accessibility improvements
 */

(function() {
    'use strict';

    // Cache DOM elements
    let filterButtons, projectCards, projectModal, projectModalClose, 
        projectModalCloseBtn, viewProjectButtons, projectsSection;

    /**
     * Initialize DOM elements
     */
    function initElements() {
        filterButtons = document.querySelectorAll('.filter-btn');
        projectCards = document.querySelectorAll('.project-card');
        projectModal = document.getElementById('projectModal');
        projectModalClose = document.getElementById('projectModalClose');
        projectModalCloseBtn = document.getElementById('projectModalCloseBtn');
        viewProjectButtons = document.querySelectorAll('.view-project-btn');
        projectsSection = document.querySelector('.projects-grid-section');
    }

    /**
     * Filter projects based on category
     * @param {string} filterValue - The category to filter by
     */
    function filterProjects(filterValue) {
        if (!projectCards.length) return;

        const isAll = filterValue === 'all';
        let visibleCount = 0;

        // Use requestAnimationFrame for smooth animations
        requestAnimationFrame(() => {
            projectCards.forEach(card => {
                if (!card) return;

                const cardCategory = card.getAttribute('data-category');
                const shouldShow = isAll || cardCategory === filterValue;

                if (shouldShow) {
                    card.classList.remove('hidden');
                    card.style.display = '';
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                    card.style.display = 'none';
                }
            });

            // Announce filter results for screen readers
            announceFilterResults(visibleCount, filterValue);
        });
    }

    /**
     * Announce filter results for accessibility
     * @param {number} count - Number of visible projects
     * @param {string} filter - Active filter
     */
    function announceFilterResults(count, filter) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
        announcement.textContent = `Showing ${count} project${count !== 1 ? 's' : ''} in ${filter === 'all' ? 'all categories' : filter}`;
        document.body.appendChild(announcement);
        setTimeout(() => announcement.remove(), 1000);
    }

    /**
     * Initialize filter functionality
     */
    function initFilters() {
        if (!filterButtons.length) return;

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                try {
                    // Remove active class and aria-pressed from all buttons
                    filterButtons.forEach(btn => {
                        if (btn) {
                            btn.classList.remove('active');
                            btn.setAttribute('aria-pressed', 'false');
                        }
                    });

                    // Add active class and aria-pressed to clicked button
                    this.classList.add('active');
                    this.setAttribute('aria-pressed', 'true');
                    
                    const filterValue = this.getAttribute('data-filter');
                    if (!filterValue) {
                        console.warn('Filter button missing data-filter attribute');
                        return;
                    }

                    // Filter projects
                    filterProjects(filterValue);

                    // Smooth scroll to projects grid (only if not showing all)
                    if (projectsSection && filterValue !== 'all') {
                        requestAnimationFrame(() => {
                            projectsSection.scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'start' 
                            });
                        });
                    }
                } catch (error) {
                    console.error('Error in filter functionality:', error);
                }
            });
        });
    }

    /**
     * Get project data from card element
     * @param {HTMLElement} projectCard - The project card element
     * @returns {Object} Project data object
     */
    function getProjectData(projectCard) {
        if (!projectCard) {
            throw new Error('Project card element is required');
        }

        return {
            title: projectCard.getAttribute('data-project-title') || 'Untitled Project',
            image: projectCard.getAttribute('data-project-image') || '',
            date: projectCard.getAttribute('data-project-date') || '',
            team: projectCard.getAttribute('data-project-team') || '',
            description: projectCard.getAttribute('data-project-description') || '',
            tech: projectCard.getAttribute('data-project-tech') || '',
            link: projectCard.getAttribute('data-project-link') || '#'
        };
    }

    /**
     * Populate modal with project data
     * @param {Object} projectData - Project data object
     */
    function populateModal(projectData) {
        try {
            // Get modal elements with error handling
            const modalTitle = document.getElementById('projectModalTitle');
            const modalImg = document.getElementById('projectModalImg');
            const modalDate = document.getElementById('projectModalDate');
            const modalTeam = document.getElementById('projectModalTeam');
            const modalDescription = document.getElementById('projectModalDescription');
            const modalTech = document.getElementById('projectModalTech');
            const modalLink = document.getElementById('projectModalLink');

            if (!modalTitle || !modalImg || !modalDate || !modalTeam || 
                !modalDescription || !modalTech || !modalLink) {
                throw new Error('One or more modal elements are missing');
            }

            // Populate basic info
            modalTitle.textContent = projectData.title;
            modalImg.alt = projectData.title;
            modalDescription.textContent = projectData.description;

            // Handle image loading with error handling
            if (projectData.image) {
                const img = new Image();
                img.onload = () => {
                    modalImg.src = projectData.image;
                    modalImg.classList.remove('loading');
                };
                img.onerror = () => {
                    modalImg.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23ddd" width="800" height="600"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EImage not available%3C/text%3E%3C/svg%3E';
                    modalImg.alt = 'Image not available';
                    modalImg.classList.remove('loading');
                };
                modalImg.classList.add('loading');
                img.src = projectData.image;
            } else {
                modalImg.src = '';
                modalImg.classList.remove('loading');
            }

            // Populate meta information
            modalDate.innerHTML = `<i class="fa-solid fa-calendar" aria-hidden="true"></i> ${projectData.date || 'Not specified'}`;
            modalTeam.innerHTML = `<i class="fa-solid fa-user" aria-hidden="true"></i> ${projectData.team || 'Not specified'}`;

            // Populate technologies
            modalTech.innerHTML = '';
            if (projectData.tech) {
                const techArray = projectData.tech.split(',').map(t => t.trim()).filter(t => t);
                techArray.forEach(techItem => {
                    const techTag = document.createElement('span');
                    techTag.className = 'tech-tag';
                    techTag.textContent = techItem;
                    techTag.setAttribute('aria-label', `Technology: ${techItem}`);
                    modalTech.appendChild(techTag);
                });
            }

            // Handle project link
            modalLink.href = projectData.link;
            modalLink.setAttribute('aria-label', `Visit ${projectData.title} project`);
            if (projectData.link === '#' || !projectData.link) {
                modalLink.style.display = 'none';
                modalLink.setAttribute('aria-hidden', 'true');
            } else {
                modalLink.style.display = 'flex';
                modalLink.removeAttribute('aria-hidden');
            }
        } catch (error) {
            console.error('Error populating modal:', error);
            throw error;
        }
    }

    /**
     * Open project modal
     * @param {HTMLElement} projectCard - The project card element
     */
    function openProjectModal(projectCard) {
        if (!projectModal) {
            console.error('Project modal element not found');
            return;
        }

        try {
            const projectData = getProjectData(projectCard);
            populateModal(projectData);

            // Show modal with accessibility
            projectModal.classList.add('active');
            projectModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';

            // Focus management for accessibility
            const firstFocusable = projectModal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (firstFocusable) {
                setTimeout(() => firstFocusable.focus(), 100);
            }

            // Prevent body scroll on mobile
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } catch (error) {
            console.error('Error opening project modal:', error);
        }
    }

    /**
     * Close project modal
     */
    function closeProjectModal() {
        if (!projectModal) return;

        try {
            projectModal.classList.remove('active');
            projectModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';

            // Return focus to the button that opened the modal
            const activeElement = document.activeElement;
            if (activeElement && activeElement.closest('.project-modal')) {
                const lastFocused = document.querySelector('.view-project-btn:focus') || 
                                   document.querySelector('.view-project-btn');
                if (lastFocused) {
                    setTimeout(() => lastFocused.focus(), 100);
                }
            }
        } catch (error) {
            console.error('Error closing project modal:', error);
        }
    }

    /**
     * Initialize modal functionality
     */
    function initModal() {
        if (!projectModal) {
            console.warn('Project modal not found in DOM');
            return;
        }

        // Set initial ARIA attributes
        projectModal.setAttribute('aria-hidden', 'true');
        projectModal.setAttribute('aria-modal', 'true');
        projectModal.setAttribute('role', 'dialog');
        projectModal.setAttribute('aria-labelledby', 'projectModalTitle');

        // Add click event to all "View Project" buttons
        if (viewProjectButtons.length) {
            viewProjectButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const projectCard = this.closest('.project-card');
                    if (projectCard) {
                        openProjectModal(projectCard);
                    }
                });
            });
        }

        // Close modal handlers
        if (projectModalClose) {
            projectModalClose.addEventListener('click', closeProjectModal);
            projectModalClose.setAttribute('aria-label', 'Close project modal');
        }

        if (projectModalCloseBtn) {
            projectModalCloseBtn.addEventListener('click', closeProjectModal);
        }

        // Close modal when clicking outside
        projectModal.addEventListener('click', function(e) {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });

        // Close modal with ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && projectModal.classList.contains('active')) {
                closeProjectModal();
            }
        });

        // Trap focus within modal for accessibility
        projectModal.addEventListener('keydown', function(e) {
            if (!projectModal.classList.contains('active')) return;

            if (e.key === 'Tab') {
                const focusableElements = projectModal.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        });
    }

    /**
     * Initialize lazy loading for project images
     */
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            observer.unobserve(img);
                        }
                    }
                });
            });

            projectCards.forEach(card => {
                const img = card?.querySelector('.project-image img');
                if (img && img.hasAttribute('loading') && img.getAttribute('loading') === 'lazy') {
                    imageObserver.observe(img);
                }
            });
        }
    }

    /**
     * Main initialization function
     */
    function init() {
        try {
            initElements();
            initFilters();
            initModal();
            initLazyLoading();
            // Project page initialized successfully
        } catch (error) {
            console.error('Error initializing project page:', error);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

