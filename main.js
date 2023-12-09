const btnUp = document.querySelector(".GoTop");
const nav = document.getElementById("nav-bar");
window.addEventListener("scroll", () => {
    if (window.scrollY !== 0) {
        btnUp.style.display = "block";
        nav.style.backgroundColor = "rgba(36, 36, 36,0.85)";
    } else {
        btnUp.style.display = "none";
        nav.style.backgroundColor = "rgba(36, 36, 36,0.6)";
    }
});

btnUp.addEventListener("click", () => {
    btnUp.style.display = "none";
    window.scrollTo(0, 0);
});

const body = document.querySelector("body");
let linked = document.querySelectorAll(".linked");
function hideAllSections() {
    const sections = document.querySelectorAll(".toggle-me");
    sections.forEach((section) => {
        section.classList.add("hidden");
    });
}

linked.forEach((link) => {
    link.addEventListener("click", (e) => {
        hideAllSections();

        let className = e.target.classList[1];

        let element = document.querySelector("#" + className);

        if (element) {
            element.classList.remove("hidden");
            if (element.id === "home") {
                body.style.backgroundImage =
                    "url(/img/pizza-pepperoni-on-the-table.jpg)";
            } else {
                body.style.backgroundImage = "none";
            }
        }
    });
});
