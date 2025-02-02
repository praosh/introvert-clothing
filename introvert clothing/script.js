// Password Protection
function checkPassword() {
    let password = document.getElementById("password-input").value;
    if (password === "introvertclothin") {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
        document.querySelector(".logo").classList.add("pop");
    } else {
        alert("Incorrect Password");
    }
}

// Menu Toggle
function toggleMenu() {
    let menu = document.getElementById("menu");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        menu.style.display = "block";
    } else {
        menu.classList.add("hidden");
        menu.style.display = "none";
    }
}

// Image Change on Touch
document.querySelectorAll(".clothing-img").forEach(img => {
    img.addEventListener("click", function() {
        let temp = this.src;
        this.src = this.getAttribute("data-alt");
        this.setAttribute("data-alt", temp);
    });
});

// Pop Effect on Correct Password
document.querySelectorAll(".clothing-item").forEach(item => {
    item.addEventListener("mouseenter", function() {
        this.classList.add("pop");
    });
    item.addEventListener("mouseleave", function() {
        this.classList.remove("pop");
    });
});