// preloader script
    
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    setTimeout(function() {
        loader.style.display = "none";
        document.body.classList.add('scroll-enable');
        }, 0);
  
  
})

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('visual-toggle');

    // Function to apply the stored mode preference
    function applyModePreference() {
        const mode = localStorage.getItem('mode');
        if (mode === 'light') {
            toggle.checked = true;
            document.body.classList.add('lightcolors');
            document.getElementById('visual-toggle-button').classList.add('lightmode');
        } else {
            toggle.checked = false;
            document.body.classList.remove('lightcolors');
            document.getElementById('visual-toggle-button').classList.remove('lightmode');
        }
    }

    // Call the function to apply the mode preference on page load
    applyModePreference();


    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            localStorage.setItem('mode', 'light');
            document.body.classList.add('lightcolors');
            document.getElementById('visual-toggle-button').classList.add('lightmode');
        } else {
            localStorage.setItem('mode', 'dark');
            document.body.classList.remove('lightcolors');
            document.getElementById('visual-toggle-button').classList.remove('lightmode');
        }
    });
});

     