function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Add event listener to close modals if clicked outside of content
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

// Toggle Dark Mode
function toggleDarkMode() {
    const body = document.body;
    const ul = document.querySelector('ul');
    const flexContainer = document.querySelector('.flex-container');
    const modals = document.querySelectorAll('.modal');
    const buttons = document.querySelectorAll('.width-button');
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Toggle dark-mode class on the body
    body.classList.toggle('dark-mode');
    
    // Toggle dark-mode class on the ul (navigation bar)
    ul.classList.toggle('dark-mode');

    // Toggle dark-mode on the flex-container
    flexContainer.classList.toggle('dark-mode');

    // Toggle dark-mode on all modals
    modals.forEach(modal => {
        modal.classList.toggle('dark-mode');
    });

    // Toggle dark-mode class on all buttons
    buttons.forEach(button => {
        button.classList.toggle('dark-mode');
    });

    // Toggle the switch state (checked/unchecked)
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.checked = true; // Switch to light mode
    } else {
        darkModeToggle.checked = false; // Switch back to dark mode
    }
}

// Function to toggle menu visibility on mobile
function toggleMenu() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
}

// script.js
function loadNavbar() {
    const navbarHTML = `
        <div class="navbar">
            <link rel="stylesheet" href="style.css"> <!-- Link to CSS file -->
            <div id="myNavbar">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li>
                        <a href="#about">About</a>
                        <ul class="dropdown">
                            <li><a href="aboutWebSite.html">About WEBsite</a></li>
                            <li><a href="introducingToTimBurton.html">Introducing to Tim Burton</a></li>
                            <li><a href="events.html">Events</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact">Contact</a></li>
                    <li class="search-bar">
                        <form action="/search" method="get">
                            <input type="text" placeholder="Search..." name="search">
                            <button type="submit">Go</button>
                        </form>
                    </li>
                    <label class="switch">
                        <input type="checkbox" id="darkModeToggle" onclick="toggleDarkMode()">
                        <span class="slider"></span>
                    </label>
                </ul>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

// Call the function to load the navbar
loadNavbar();