// Dark mode initialization script - moet direct in <head> worden uitgevoerd
// Dit voorkomt de "flash of light mode" bij page refresh
(function() {
  // Check localStorage voor theme preference
  const savedTheme = localStorage.getItem('pm7-theme');
  
  // Als dark mode is opgeslagen, pas het direct toe
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
  } 
  // Als er geen saved theme is, check system preference
  else if (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
  }
})();