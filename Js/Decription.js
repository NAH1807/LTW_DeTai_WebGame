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
