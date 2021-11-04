

let btn = document.getElementsByClassName("dropdown-toggle")[0];
let menu = document.getElementsByClassName("dropddown")[0];

btn.addEventListener("click",function(){
    console.log(menu.classList);
    menu.classList.toggle("show");
});

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        menu.classList.remove('show');
    }
  }

let brgr = document.getElementsByClassName("burger")[0];
let mob_menu = document.getElementsByClassName("mobile-menu")[0];
let close_mob_menu = document.getElementsByClassName("close")[0];
let modal_backdrop = document.getElementsByClassName("modal-backdrop")[0];
console.log(document.body);
brgr.addEventListener("click",function(){
    mob_menu.classList.remove("fade-out");
    mob_menu.classList.add("fade-in");
    
})

close_mob_menu.addEventListener("click",function(){
    mob_menu.classList.remove("fade-in");
    mob_menu.classList.add("fade-out");
})