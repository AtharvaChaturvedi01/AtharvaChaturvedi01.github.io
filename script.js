document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Check if the user has a preference for dark mode
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial theme based on user preference or default to light mode
    body.classList.toggle('dark', prefersDarkMode);

    // Toggle dark mode when the button is clicked
    darkModeToggle.addEventListener('click', function () {
        const isDarkMode = body.classList.toggle('dark');
        // Save user preference in localStorage
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Check for user preference in localStorage
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode !== null) {
        body.classList.toggle('dark', JSON.parse(storedDarkMode));
    }

    document.addEventListener('DOMContentLoaded', function () {
        // ... (unchanged) ...
    
        // Show/hide projects section when the "Projects" tab is clicked
        const projectsTab = document.getElementById('projects-tab');
        const projectsSection = document.getElementById('projects');
    
        projectsTab.addEventListener('click', function () {
            // Toggle the visibility of the projects section
            projectsSection.classList.toggle('hidden');
        });
    });
});
