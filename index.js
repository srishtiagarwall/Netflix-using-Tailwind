const userMenuBtn = document.getElementById('user-menu-button');
const userMenuItem = document.getElementById('user-menu');

userMenuItem.style.display = 'none';
userMenuBtn.addEventListener('click', () => {
    userMenuItem.style.display = userMenuItem.style.display === 'none' ? 'block' : 'none';
});