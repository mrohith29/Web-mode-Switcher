const themeToggle = document.getElementById('theme-toggle');
const themeStyle = document.getElementById('theme-style');
let isDarkMode = false;

themeToggle.addEventListener('click', () => {
    if (isDarkMode) {
        themeStyle.setAttribute('href', 'dark-style.css');
        isDarkMode = false;
    }
    else 
    {
        themeStyle.setAttribute('href', 'light-styel.css');
        isDarkMode = true;
    }
});