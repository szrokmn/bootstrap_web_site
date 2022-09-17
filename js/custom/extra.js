 window.addEventListener("DOMContentLoaded", event => {
    let navbarMobile = function () {
        const nCollapsible = document.body.querySelector("#mainNavbar");
        if(!nCollapsible) {
            return;
        }
        if(window.screenY === 0) {
            nCollapsible.classList.remove("navbar-mobile");
        }else {
            nCollapsible.classList.add("navbar-mobile");
        }
    };
    navbarMobile();
    document.addEventListener("scroll", navbarMobile);
 });