let menu_btn = document.querySelector(".menu-btn");
let inner_links = document.querySelector(".inner-links");
menu_btn.addEventListener("click",()=>{
    inner_links.classList.toggle("show")
})
