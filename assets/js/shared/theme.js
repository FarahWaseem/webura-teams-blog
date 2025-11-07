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
    
    // Detect if we're on index.html (root) or in html/ subdirectory
    const isRootPage = window.location.pathname === '/' || 
                       window.location.pathname.endsWith('index.html') ||
                       !window.location.pathname.includes('/html/');
    const logoBasePath = isRootPage ? 'img/' : '../img/';
    
    /**
     * Update logo paths based on theme
     * @param {string} theme - 'light' or 'dark'
     */
    function updateLogos(theme) {
        const darkLogoPath = logoBasePath + 'darkLogo.png';
        const whiteLogoPath = logoBasePath + 'whiteLogo.png';
        
        if (theme === 'light') {
            if (mainLogo) {
                // Preserve the base path and just change the logo filename
                if (mainLogo.src.includes('darkLogo')) {
                    mainLogo.src = mainLogo.src.replace('darkLogo.png', 'whiteLogo.png');
                } else {
                    mainLogo.src = whiteLogoPath;
                }
            }
            if (footerLogo) {
                if (footerLogo.src.includes('darkLogo')) {
                    footerLogo.src = footerLogo.src.replace('darkLogo.png', 'whiteLogo.png');
                } else {
                    footerLogo.src = whiteLogoPath;
                }
            }
        } else {
            if (mainLogo) {
                if (mainLogo.src.includes('whiteLogo')) {
                    mainLogo.src = mainLogo.src.replace('whiteLogo.png', 'darkLogo.png');
                } else {
                    mainLogo.src = darkLogoPath;
                }
            }
            if (footerLogo) {
                if (footerLogo.src.includes('whiteLogo')) {
                    footerLogo.src = footerLogo.src.replace('whiteLogo.png', 'darkLogo.png');
                } else {
                    footerLogo.src = darkLogoPath;
                }
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


