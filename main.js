window.addEventListener("DOMContentLoaded", function () {

    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        // login/signup hide
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("signupBtnHeader").style.display = "none";

        // logout show
        document.getElementById("logoutBtn").style.display = "inline-block";

    } else {
        // login/signup show
        document.getElementById("loginBtn").style.display = "inline-block";
        document.getElementById("signupBtnHeader").style.display = "inline-block";

        // logout hide
        document.getElementById("logoutBtn").style.display = "none";
    }
});


// 🔥 Logout button logic
document.getElementById("logoutBtn").addEventListener("click", function () {

    localStorage.removeItem("isLoggedIn");

    // UI update instantly
    document.getElementById("loginBtn").style.display = "inline-block";
    document.getElementById("signupBtnHeader").style.display = "inline-block";
    document.getElementById("logoutBtn").style.display = "none";
});