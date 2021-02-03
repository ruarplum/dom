const image = document.querySelector("#cat");
const button = document.querySelector("#submit");

console.log(image.style)

button.addEventListener("click", () => {
    console.log("hello")
    if (image.style.display == "none") {
       image.style.display = "block";
       button.textContent = "hide";
    }
     else {
        image.style.display = "none";
        button.textContent = "show";
    }
})