const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
var typed = new Typed(".auto-type", {
    strings: ["Web Developer", "Programmer", "Web Designer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
})
AOS.init({
    offset: 50,
    duration: 1000,
    once: true
});
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})
