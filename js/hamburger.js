function collapse() {
  var x = document.getElementById("hamburger-par");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function resized(){
  console.log(parseInt(window.innerWidth))
  if (parseInt(window.innerWidth) >= 780){
    document.getElementById("hamburger-par").style.display = "none";
  console.log(document.getElementById("hamburger-par").style.display);
  }
}