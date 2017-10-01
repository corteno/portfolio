let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.nav');
let menuItems = menu.childNodes;
let menuBg = document.querySelector('.menu-background');
let isOpen = false;

const openMenu = () => {
    menuBg.className = "menu-background menu-background-active";
    menu.className = "nav nav-active";

    isOpen = true;
};

const closeMenu = () => {
    menuBg.className = "menu-background";
    menu.className = "nav";

    isOpen = false;
};


menuItems.forEach((item) =>{
    if(item.tagName === 'A'){
        item.addEventListener('click', () => {
            closeMenu();
        });
    }
});


hamburger.addEventListener('click', () => {
    if(!isOpen){
        openMenu();
    } else {
       closeMenu();
    }
});
