document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById('menu-btn');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const darkModeSwitch = document.getElementById('dark-mode-switch');
  
    // Toggle dropdown
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownMenu.classList.toggle('show');
    });
  
    document.addEventListener('click', () => {
      dropdownMenu.classList.remove('show');
    });
  
    dropdownMenu.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  
    // Dark mode functions
    const applyDarkMode = (enabled) => {
      if (enabled) {
        document.body.classList.add('dark-mode');
        darkModeSwitch.checked = true;
      } else {
        document.body.classList.remove('dark-mode');
        darkModeSwitch.checked = false;
      }
    };
  
    darkModeSwitch.addEventListener('change', () => {
      const enabled = darkModeSwitch.checked;
      applyDarkMode(enabled);
      localStorage.setItem('dark-mode', enabled ? 'enabled' : 'disabled');
    });
  
    // Load saved mode
    if (localStorage.getItem('dark-mode') === 'enabled') {
      applyDarkMode(true);
    }
  });
  