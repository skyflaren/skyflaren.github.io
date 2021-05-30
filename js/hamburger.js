function collapse() {
    var x = document.getElementById("hamburger-par");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

function resized() {
    if (parseInt(window.innerWidth) >= 800) {
        document.getElementById("hamburger-par").style.display = "none";
    }
}