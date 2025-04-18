const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

// Toggle dropdown
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
  dropdownMenu.classList.remove('show');
});

dropdownMenu.addEventListener('click', (e) => {
  e.stopPropagation();
});
