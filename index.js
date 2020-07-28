
function goodbye() {
    document.getElementById("hide").style.display = "none";
    document.getElementById("hidden").style.display = "block";
    console.log("working")
}

function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}