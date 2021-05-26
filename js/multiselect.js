document.addEventListener("click", function(event) {
    let multiselect = document.getElementById("multiselect");
    let checkboxes = document.getElementById("checkBoxes");
    if(!multiselect.contains(event.target)) {
        checkboxes.style.display = "none";
    }
});

function showCheckBoxes() {
    let checkboxes = document.getElementById("checkBoxes");
    if(checkboxes.style.display == "none") {
        checkboxes.style.display = "block";
    } else {
        checkboxes.style.display = "none";
    }
}