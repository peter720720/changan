const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const navBar = document.getElementById("navBar");

menuBtn.addEventListener("click", () => {
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
    navBar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
    navBar.classList.remove("active");
});
