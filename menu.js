const openMenu = document.getElementById("menuBtn");
const closeMenu = document.getElementById("xclose");

openMenu.addEventListener("click", function(ev){
    console.log('asdfasf');
    document.getElementById('myaside').classList.add('newAside');
    openMenu.classList.toggle("active");
    closeMenu.classList.toggle("active");
})
closeMenu.addEventListener("click", function(ev){
    document.getElementById('myaside').classList.remove('newAside');
    openMenu.classList.toggle("active");
    closeMenu.classList.toggle("active");
})
