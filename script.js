/** @type {HTMLUListElement} */
const activeMenuBAR = document.querySelector(".active-menu-bar");

function closeSideBar() {
    activeMenuBAR.style.display = "none";
    activeMenuBAR.style.transition = "1s";
}
function showSideBar() {
    activeMenuBAR.style.display = "flex";
    activeMenuBAR.style.transition = "1s";
}