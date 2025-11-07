// ==================== HOME PAGE JAVASCRIPT ====================

// Stats Counter Animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Intersection Observer for Stats Animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number[data-target]');
            statNumbers.forEach(stat => {
                if (!stat.classList.contains('animated')) {
                    stat.classList.add('animated');
                    animateCounter(stat);
                }
            });
        }
    });
}, {
    threshold: 0.5
});

// Observe Stats Section
document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
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
});

// ==================== CONTACT FORM VALIDATION & SUBMISSION ====================

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");
    const btnText = submitBtn.querySelector(".btn-text");
    const btnLoader = submitBtn.querySelector(".btn-loader");
    const formMessage = document.getElementById("formMessage");

    // Form fields
    const fields = {
        name: document.getElementById("name"),
        email: document.getElementById("email"),
        phone: document.getElementById("phone"),
        subject: document.getElementById("subject"),
        message: document.getElementById("message"),
        website: document.getElementById("website"), // honeypot
    };

    // Error message containers
    const errors = {
        name: document.getElementById("nameError"),
        email: document.getElementById("emailError"),
        phone: document.getElementById("phoneError"),
        subject: document.getElementById("subjectError"),
        message: document.getElementById("messageError"),
    };

    // Regex patterns for validation
    const patterns = {
        name: /^[A-Za-z\u0600-\u06FF\s]{3,50}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^[0-9+\-\s]{7,20}$/,
        subject: /^.{3,100}$/,
        message: /^.{10,1000}$/,
    };

    // Validate a single field
    function validateField(field, pattern, errorMessage) {
        const value = field.value.trim();
        if (!value) return "This field is required.";
        if (!pattern.test(value)) return errorMessage;
        return "";
    }

    // Display or clear error message
    function showError(name, message) {
        errors[name].textContent = message;
        fields[name].classList.toggle("invalid", !!message);
    }

    // Clear error messages when user starts typing
    Object.keys(fields).forEach(name => {
        if (name === "website") return; // skip honeypot
        fields[name].addEventListener("input", () => showError(name, ""));
    });

    // Handle form submission
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        let isValid = true;

        // Honeypot check — if filled, it's spam
        if (fields.website.value.trim() !== "") {
            formMessage.textContent = "Spam detected. Submission rejected.";
            formMessage.style.color = "red";
            return;
        }

        // Validate all fields
        if (!patterns.name.test(fields.name.value.trim())) {
            showError("name", "Please enter a valid full name (3–50 characters).");
            isValid = false;
        }
        if (!patterns.email.test(fields.email.value.trim())) {
            showError("email", "Please enter a valid email address.");
            isValid = false;
        }
        if (fields.phone.value && !patterns.phone.test(fields.phone.value.trim())) {
            showError("phone", "Please enter a valid phone number.");
            isValid = false;
        }
        if (!patterns.subject.test(fields.subject.value.trim())) {
            showError("subject", "Subject must be between 3 and 100 characters.");
            isValid = false;
        }
        if (!patterns.message.test(fields.message.value.trim())) {
            showError("message", "Message must be at least 10 characters long.");
            isValid = false;
        }

        if (!isValid) return;

        // Stop if validation failed
        btnText.style.display = "none";
        btnLoader.style.display = "inline-flex";
        formMessage.textContent = "";

        try {
            // Form submission (currently simulated - can be connected to PHP or API)
            await new Promise(resolve => setTimeout(resolve, 2000));

            form.reset();
            formMessage.textContent = "✅ Message sent successfully! We'll get back to you soon.";
            formMessage.style.color = "green";
        } catch (error) {
            formMessage.textContent = "❌ Something went wrong. Please try again later.";
            formMessage.style.color = "red";
        } finally {
            btnText.style.display = "inline-flex";
            btnLoader.style.display = "none";
        }
    });
});
