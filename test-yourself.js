document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        this.style.backgroundColor = "green";
        this.style.color = "white";
        this.disabled = true;
        const course = this.getAttribute("data-course");
        let pagee = "";

        if (course === "ui-ux") {
            pagee = "frontend-test.html";
        } 
        else if (course === "node") {
            pagee = "backend-test.html";
        } 
        else if (course === "next") {
            pagee = "fullstack-test.html";
        }
        setTimeout(() => {
            window.location.href = pagee;
        }, 1000);
    });
});