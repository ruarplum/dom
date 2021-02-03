const image = document.querySelector("#image");
const input = document.querySelector("#input");
const button = document.querySelector("#submit");

console.log(image);

// Changes the image source to what is put into the input and changes picture accordingly
button.addEventListener("click", () => {
    image.src = input.value;
})