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
     * Update logo paths based on theme
     * @param {string} theme - 'light' or 'dark'
     */
    function updateLogos(theme) {
        const darkLogoPath = '../img/darkLogo.png';
        const whiteLogoPath = '../img/whiteLogo.png';
        
        if (theme === 'light') {
            if (mainLogo) {
                mainLogo.src = mainLogo.src.includes('darkLogo') 
                    ? mainLogo.src.replace('darkLogo.png', 'whiteLogo.png')
                    : whiteLogoPath;
            }
            if (footerLogo) {
                footerLogo.src = footerLogo.src.includes('darkLogo')
                    ? footerLogo.src.replace('darkLogo.png', 'whiteLogo.png')
                    : whiteLogoPath;
            }
        } else {
            if (mainLogo) {
                mainLogo.src = mainLogo.src.includes('whiteLogo')
                    ? mainLogo.src.replace('whiteLogo.png', 'darkLogo.png')
                    : darkLogoPath;
            }
            if (footerLogo) {
                footerLogo.src = footerLogo.src.includes('whiteLogo')
                    ? footerLogo.src.replace('whiteLogo.png', 'darkLogo.png')
                    : darkLogoPath;
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


