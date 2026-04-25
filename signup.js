// handle form submit (not button click)
document.querySelector("form").addEventListener("submit", function (e) {

    e.preventDefault(); // stop reload

    // ✅ only runs after validation passes
    localStorage.setItem("isLoggedIn", "true");

    // show popup
    document.getElementById("popup").style.display = "flex";
});


// close button + redirect
document.getElementById("closePopup").addEventListener("click", function () {
    window.location.href = "index.html";
});