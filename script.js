// parallax effect for index spotlight
document.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const parallaxElement = document.getElementById("spotlight");
    parallaxElement.style.backgroundPositionY = -scrollPosition * 0.3 + "px";
});