/**
 * Theme Toggle Functionality
 * Handles light/dark theme switching and logo updates
 */

(function() {
    'use strict';

    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const mainLogo = document.getElementById('mainLogo');
    const footerLogo = document.getElementById('footerLogo');
    
    if (!themeToggle) return;

    // Check for saved theme preference or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    /**
     * Detect the correct logo base path by checking the original src attribute
     * This is more reliable than parsing window.location.pathname
     */
    function detectLogoBasePath() {
        // Get the original src attribute from HTML (most reliable)
        if (mainLogo) {
            const originalSrc = mainLogo.getAttribute('src');
            if (originalSrc) {
                // Check if it starts with '../img/' (subdirectory pages)
                if (originalSrc.startsWith('../img/')) {
                    return '../img/';
                }
                // Check if it starts with 'img/' (root page)
                if (originalSrc.startsWith('img/')) {
                    return 'img/';
                }
                // For full URLs, extract the relative part
                const relativeMatch = originalSrc.match(/(img\/|\.\.\/img\/)/);
                if (relativeMatch && relativeMatch[1]) {
                    return relativeMatch[1];
                }
            }
        }
        
        // Fallback: detect based on pathname
        const pathname = window.location.pathname;
        const isRootPage = pathname === '/' || 
                           pathname === '/webura-teams-blog/' ||
                           pathname.endsWith('/index.html') ||
                           pathname.endsWith('/webura-teams-blog/index.html') ||
                           (!pathname.includes('/html/') && !pathname.includes('/webura-teams-blog/html/'));
        
        return isRootPage ? 'img/' : '../img/';
    }
    
    const logoBasePath = detectLogoBasePath();
    
    /**
     * Get the correct logo path based on current page location
     * @param {string} logoName - 'darkLogo' or 'whiteLogo'
     * @returns {string} - Correct relative path to logo
     */
    function getLogoPath(logoName) {
        return logoBasePath + logoName + '.png';
    }
    
    /**
     * Update logo paths based on theme
     * @param {string} theme - 'light' or 'dark'
     */
    function updateLogos(theme) {
        const darkLogoPath = getLogoPath('darkLogo');
        const whiteLogoPath = getLogoPath('whiteLogo');
        
        if (theme === 'light') {
            if (mainLogo) {
                mainLogo.src = whiteLogoPath;
            }
            if (footerLogo) {
                footerLogo.src = whiteLogoPath;
            }
        } else {
            if (mainLogo) {
                mainLogo.src = darkLogoPath;
            }
            if (footerLogo) {
                footerLogo.src = darkLogoPath;
            }
        }
    }
    
    /**
     * Apply theme to the page
     * @param {string} theme - 'light' or 'dark'
     */
    function applyTheme(theme) {
        if (theme === 'light') {
            body.classList.add('light-theme');
            themeToggle.textContent = '☀️';
            updateLogos('light');
        } else {
            body.classList.remove('light-theme');
            themeToggle.textContent = '🌙';
            updateLogos('dark');
        }
    }

    // Apply initial theme
    applyTheme(currentTheme);

    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        const isLightTheme = body.classList.contains('light-theme');
        const newTheme = isLightTheme ? 'dark' : 'light';
        
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
})();


