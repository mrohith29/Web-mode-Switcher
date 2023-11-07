const themeToggle = document.getElementById('theme-toggle');
const themeStyle = document.getElementById('theme-style');
let isDarkMode = false;

themeToggle.addEventListener('click', () => {
    if (isDarkMode) {
        themeStyle.setAttribute('href', 'light-style.css');
        isDarkMode = false;
    }
    else 
    {
        themeStyle.setAttribute('href', 'dark-styel.css');
        isDarkMode = true;
    }
});