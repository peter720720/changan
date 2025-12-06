const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const navBar = document.getElementById("navBar");

menuBtn.addEventListener("click", () => {
    menuBtn.style.display = "none";      // hide menu icon
    closeBtn.style.display = "block";    // show X
    navBar.classList.add("active");      // slide nav in
});

closeBtn.addEventListener("click", () => {
    closeBtn.style.display = "none";     // hide X
    menuBtn.style.display = "block";     // show menu icon
    navBar.classList.remove("active");   // slide nav out
});
