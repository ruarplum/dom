const placeholder = document.getElementById("placeholder");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("list");


// submit.addEventListener("click", () => {
//     placeholder.style.color = "goldenrod";
//     placeholder.textContent = input.value;
// })


submit.addEventListener("click", () => {
    placeholder.style.color = "blue";
    placeholder.textContent = `<li>${input.value}</li>`;

    // This changes ALL LIST content in HTML to whatever is input 
    list.innerHTML = `<li>${input.value}</li>`;
})