const appEl = document.getElementById("app");
const navbarEl = document.getElementById("navbar");

function initScroll(el: HTMLElement) {
    if (el.scrollTop > 120) {
        if (!navbarEl.classList.contains("bo")) {
            navbarEl.classList.add("bo");
        }
    } else {
        if (navbarEl.classList.contains("bo")) {
            navbarEl.classList.remove("bo");
        }
    }
}
appEl.addEventListener("scroll", function (evt) {
    const el = evt.target as HTMLElement;
    initScroll(el);
});
initScroll(appEl);
