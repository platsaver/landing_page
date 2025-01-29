function showOptions() {
    var selectedValue = document.getElementById("way").value;
    document.getElementById("Components").style.display = "none";
    document.getElementById("Switch Type").style.display = "none";
    document.getElementById("Mounting Style").style.display = "none";
    if (selectedValue === "Components") {
        document.getElementById("Components").style.display = "block";
    } else if (selectedValue === "Switch Type") {
        document.getElementById("Switch Type").style.display = "block";
    } else if (selectedValue === "Mounting Style") {
        document.getElementById("Mounting Style").style.display = "block";
    }
}
window.onload = function(){
    document.getElementById("way").value = "Select one";
    showOptions();
}