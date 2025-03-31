function scrollToSlide(slideNumber) {
    let slide = document.getElementById("slide" + slideNumber);
    if (slide) {
        slide.scrollIntoView({ behavior: "smooth" });
    }
}
