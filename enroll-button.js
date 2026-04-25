document.querySelectorAll(".cardenroll-btn").forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        this.innerText = "Enrolled";
        this.style.backgroundColor = "green";
        this.style.color = "white";
        this.disabled = true;
        const course = this.getAttribute("data-course");
        let pages = "";

        if (course === "frontend") {
            pages = "ui-ux.html";
        } 
        else if (course === "backend") {
            pages = "backend.html";
        } 
        else if (course === "Fullstack") {
            pages = "fullstack.html";
        }
        setTimeout(() => {
            window.location.href = pages;
        }, 1000);
    });
});
