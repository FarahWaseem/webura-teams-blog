// ==================== ABOUT PAGE JAVASCRIPT ====================

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ==================== CONTACT FORM VALIDATION & SUBMISSION ====================
    const form = document.getElementById("aboutContactForm");
    if (form) {
        const submitBtn = form.querySelector(".submit-btn");
        
        // Form fields
        const fields = {
            name: document.getElementById("aboutName"),
            email: document.getElementById("aboutEmail"),
            phone: document.getElementById("aboutPhone"),
            company: document.getElementById("aboutCompany"),
            message: document.getElementById("aboutMessage"),
        };

        // Regex patterns for validation
        const patterns = {
            name: /^[A-Za-z\u0600-\u06FF\s]{3,50}$/,
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            phone: /^[0-9+\-\s]{7,20}$/,
            company: /^.{0,100}$/,
            message: /^.{10,1000}$/,
        };

        // Error messages
        const errorMessages = {
            name: "Please enter a valid full name (3–50 characters).",
            email: "Please enter a valid email address.",
            phone: "Please enter a valid phone number (7–20 characters).",
            message: "Message must be at least 10 characters long.",
        };

        // Validate a single field
        function validateField(fieldName) {
            const field = fields[fieldName];
            const value = field.value.trim();
            const pattern = patterns[fieldName];

            if (fieldName === 'message' && !value) {
                showFieldError(field, errorMessages[fieldName]);
                return false;
            }

            if (fieldName === 'name' && !value) {
                showFieldError(field, "Full name is required.");
                return false;
            }

            if (fieldName === 'email' && !value) {
                showFieldError(field, "Email address is required.");
                return false;
            }

            if (value && !pattern.test(value)) {
                showFieldError(field, errorMessages[fieldName]);
                return false;
            }

            clearFieldError(field);
            return true;
        }

        // Show error on field
        function showFieldError(field, message) {
            field.style.borderColor = '#ff4444';
            field.style.boxShadow = '0 0 0 4px rgba(255, 68, 68, 0.1)';
            
            // Create or update error message
            let errorMsg = field.parentElement.querySelector('.field-error');
            if (!errorMsg) {
                errorMsg = document.createElement('span');
                errorMsg.className = 'field-error';
                errorMsg.style.cssText = 'display: block; color: #ff4444; font-size: 12px; margin-top: 5px;';
                field.parentElement.appendChild(errorMsg);
            }
            errorMsg.textContent = message;
        }

        // Clear error from field
        function clearFieldError(field) {
            field.style.borderColor = '';
            field.style.boxShadow = '';
            const errorMsg = field.parentElement.querySelector('.field-error');
            if (errorMsg) {
                errorMsg.remove();
            }
        }

        // Real-time validation on input
        Object.keys(fields).forEach(fieldName => {
            const field = fields[fieldName];
            if (field) {
                field.addEventListener('blur', () => {
                    validateField(fieldName);
                });

                field.addEventListener('input', () => {
                    if (field.style.borderColor === 'rgb(255, 68, 68)') {
                        validateField(fieldName);
                    }
                });
            }
        });

        // Handle form submission
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            
            // Validate all required fields
            const isValidName = validateField('name');
            const isValidEmail = validateField('email');
            const isValidMessage = validateField('message');
            
            // Validate optional fields if filled
            let isValidPhone = true;
            if (fields.phone.value.trim()) {
                isValidPhone = validateField('phone');
            }

            if (!isValidName || !isValidEmail || !isValidMessage || !isValidPhone) {
                // Scroll to first error
                const firstError = form.querySelector('.field-error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                return;
            }

            // Show loading state
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

            try {
                // Simulate form submission (replace with actual API call)
                await new Promise(resolve => setTimeout(resolve, 2000));

                // Show success message
                showFormMessage('✅ Message sent successfully! We\'ll get back to you soon.', 'success');
                
                // Reset form
                form.reset();
                
                // Clear all field errors
                Object.values(fields).forEach(field => {
                    if (field) clearFieldError(field);
                });

            } catch (error) {
                showFormMessage('❌ Something went wrong. Please try again later.', 'error');
            } finally {
                // Restore button
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                submitBtn.innerHTML = originalText;
            }
        });

        // Show form message
        function showFormMessage(message, type) {
            // Remove existing message
            const existingMsg = form.querySelector('.form-message');
            if (existingMsg) {
                existingMsg.remove();
            }

            // Create new message
            const msgElement = document.createElement('div');
            msgElement.className = 'form-message';
            msgElement.style.cssText = `
                margin-top: 20px;
                padding: 15px;
                border-radius: 8px;
                text-align: center;
                font-weight: 500;
                animation: fadeIn 0.3s ease;
            `;

            if (type === 'success') {
                msgElement.style.background = 'rgba(50, 150, 250, 0.1)';
                msgElement.style.color = '#3296fa';
                msgElement.style.border = '2px solid rgba(50, 150, 250, 0.3)';
            } else {
                msgElement.style.background = 'rgba(255, 68, 68, 0.1)';
                msgElement.style.color = '#ff4444';
                msgElement.style.border = '2px solid rgba(255, 68, 68, 0.3)';
            }

            msgElement.textContent = message;
            form.appendChild(msgElement);

            // Auto remove after 5 seconds
            setTimeout(() => {
                if (msgElement.parentElement) {
                    msgElement.style.animation = 'fadeOut 0.3s ease';
                    setTimeout(() => msgElement.remove(), 300);
                }
            }, 5000);
        }
    }

    // ==================== SCROLL ANIMATIONS ====================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    // Observe elements with animations
    document.querySelectorAll('.why-card, .team-card, .event-item').forEach(el => {
        observer.observe(el);
    });
});

// Add fade animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

