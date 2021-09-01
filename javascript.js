const beeButton = document.getElementById("myBtn")
const dropdown = document.getElementById("myDropdowwn");


beeButton.addEventListener("click", function(){

    if (dropdown.style.display === "none") {
        dropdown.style.display = "flex";
    } else {
        dropdown.style.display = "none";
    }
})
