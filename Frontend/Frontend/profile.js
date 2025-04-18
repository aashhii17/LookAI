const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

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

// Save profile form
document.getElementById('profile-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const contact = document.getElementById('contact').value.trim();

  if (!name || !email || !contact) {
    alert("Please fill in all fields.");
    return;
  }

  // Optionally save to localStorage or send to a backend
  alert(`Profile saved:\nName: ${name}\nEmail: ${email}\nContact: ${contact}`);
});

