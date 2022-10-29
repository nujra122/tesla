const openMenu = document.getElementsByClassName("aside");
const closeMenu = document.querySelector(".x");
console.log(openMenu, "menu");
openMenu.addEventListener("onClick", function(ev){
    console.log("kk");
    openMenu.classList.toggle("active");
    closeMenu.classList.toggle("active");
})