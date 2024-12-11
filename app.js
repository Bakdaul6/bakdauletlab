
const shareButton = document.querySelector('.share-button');
const shareMenu = document.querySelector('.share-menu');
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');


if (shareButton && shareMenu) {
    shareButton.addEventListener('click', () => {
        shareMenu.classList.toggle('active'); 
    });
}


if (menuToggle && sideMenu) {
    menuToggle.addEventListener('click', () => {
        sideMenu.classList.toggle('open');
    });
}
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.content > *').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.5}s`;
        el.classList.add('animate-fade');
    });
});
<div class="menu-toggle" onclick="toggleMenu()">☰</div>
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
