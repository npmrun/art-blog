const navbarEl = document.getElementById("navbar");

function initScroll() {
    if (document.documentElement.scrollTop > 120) {
        if (!navbarEl.classList.contains("bo")) {
            navbarEl.classList.add("bo");
        }
    } else {
        if (navbarEl.classList.contains("bo")) {
            navbarEl.classList.remove("bo");
        }
    }
}
window.addEventListener("scroll", function (evt) {
    initScroll();
});
initScroll();
