// Sticky Navbar
window.onscroll = function(){
    stickyNav()
}

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

function stickyNav() {
    if (window.pageYOffset >= sticky){
        navbar.classList.add("stickyNav")
    }
    else {
        navbar.classList.remove("stickyNav")
    }
}
