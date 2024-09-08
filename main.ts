// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the navbar toggle button and the navbar links list
    const navbarToggle = document.getElementById('navbarToggle') as HTMLElement;
    const navbarLinks = document.getElementById('navbarLinks') as HTMLElement;

    // Add click event listener to the toggle button
    navbarToggle.addEventListener('click', () => {
        // Toggle the 'open' class on the navbar links list
        navbarLinks.classList.toggle('open');
    });

    // Smooth scroll functionality for navbar links
    const navbarLinkItems = document.querySelectorAll('.navbar-links a');

    navbarLinkItems.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor click behavior
            const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute('href'); // Get the href attribute of the clicked link
            document.querySelector(targetId!)?.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the target section
            navbarLinks.classList.remove('open'); // Close the navbar on link click
       });
});
});