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

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }