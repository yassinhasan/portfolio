let menu_btn = document.querySelector(".menu-btn");
let inner_links = document.querySelector(".inner-links");
let fa_moon = document.querySelector(".fa-moon");
menu_btn.addEventListener("click",()=>{
    inner_links.classList.toggle("show")
})
fa_moon.addEventListener("click",()=>{
    document.body.classList.toggle("light")
})
