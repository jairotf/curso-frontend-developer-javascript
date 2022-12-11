const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', toggleDesktoppMenu);



function toggleDesktoppMenu() {
    desktopMenu.classList.toggle('inactive');

}


    
