document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    menuBtn.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownMenu.style.display = (dropdownMenu.style.display === "flex") ? "none" : "flex";
    });

    document.addEventListener("click", function (event) {
        if (!menuBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});

function toggleMenu() {
    var menu = document.getElementById("menu");
    let btn = document.getElementsByClassName("menu-toggle")[0];
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        btn.innerHTML = ">";

    } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        btn.innerHTML = "<";
    }
}