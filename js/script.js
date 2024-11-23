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

document.querySelector('.logo a').addEventListener('contextmenu', function(e) {
    e.preventDefault(); // prevent user to right click on the image
});



 // Get the current year
 const currentYear = new Date().getFullYear();
    
 // Update the footer with the current year
 document.getElementById('currentYear').textContent = currentYear;
     

/* show stars on the website but meh im lazy to do the css for this
 async function fetchGitHubStats() {
    const response = await fetch('https://api.github.com/repos/fr0st-iwnl/kiyokomacro');
    const repoData = await response.json();

    document.getElementById('stars').innerText = `Stars: ${repoData.stargazers_count}`;
}

fetchGitHubStats();

*/