const effectmenuOpen = document.querySelector('.activeMenu');

const openMenu = document.querySelector('.nav-list');

effectmenuOpen.addEventListener('click', function () {
    openMenu.classList.toggle('openMenu')
})