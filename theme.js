// Gestionnaire du thème
function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Vérifier le thème au chargement
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && 
         window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
});