document.addEventListener('DOMContentLoaded', () => {
    // Navigation Handling
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');

    // Function to switch active section
    function switchSection(sectionId) {
        // Remove active class from all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to current section and nav link
        const targetSection = document.getElementById(sectionId);
        const targetLink = document.querySelector(`[data-section="${sectionId}"]`);

        if (targetSection && targetLink) {
            targetSection.classList.add('active');
            targetLink.classList.add('active');
        }
    }

    // Add click event to navigation links and call-to-action buttons
    function addNavigationListeners() {
        const navigationElements = [
            ...document.querySelectorAll('.nav-links a'),
            ...document.querySelectorAll('.cta-buttons a[href^="#"]')
        ];

        navigationElements.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                // Extract section ID from href or data-section attribute
                const sectionId = link.getAttribute('href').replace('#', '') ||
                    link.getAttribute('data-section');
                switchSection(sectionId);

                // Scroll to the top of the section
                document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    // Initialize navigation listeners
    addNavigationListeners();

    // Default to home section on load
    switchSection('home');

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collect form data
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        };

        // Here you would typically send the form data to a backend service
        console.log('Form submitted:', formData);

        // Optional: Show a success message
        alert('Thank you for your message! I will get back to you soon.');

        // Reset the form
        contactForm.reset();
    });
});