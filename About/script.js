document.addEventListener("DOMContentLoaded", () => {
    let navbtn = document.getElementById("navbtn");

    navbtn.addEventListener("click", (e) => {
        const navlist = document.querySelector(".nav-list");
        if (navlist.classList.contains("active")) {
            navlist.classList.toggle("active");
            navbtn.innerHTML = "&#9776;";
            e.stopPropagation();
        } else {
            navlist.classList.toggle("active");
            navbtn.innerHTML = "&#9747;";
            e.stopPropagation();
        }
    })

    document.addEventListener("click", () => {
        const navlist = document.querySelector(".nav-list");
        if (navlist.classList.contains("active")) {
            navlist.classList.toggle("active");
            navbtn.innerHTML = "&#9776;";
        }
    })
});