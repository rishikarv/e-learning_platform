document.querySelectorAll(".demo-btn").forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        this.innerText = "Watch Demo";
        this.style.backgroundColor = "green";
        this.style.color = "white";
        this.disabled = true;
        const course = this.getAttribute("data-course");
        let page = "";
 
        if (course === "back") {
            page = "demo-vid2.html";
        }
        else if (course === "full") {
            page = "demo-vid3.html";
        }
        else if(course == "front"){
            page = "demo-vid1.html"
        }
        setTimeout(() => {
            window.location.href = page;
        }, 1000);
    });
});
