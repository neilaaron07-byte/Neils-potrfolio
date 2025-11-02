function setTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('dark-theme', isDark);
}

// Initialize theme
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('dark-theme');
setTheme(savedTheme !== null ? savedTheme === 'true' : prefersDark);

// Theme toggle handler
function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
}

// Handle system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (localStorage.getItem('dark-theme') === null) {
        setTheme(e.matches);
    }
});