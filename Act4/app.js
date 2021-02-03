const list = document.querySelectorAll("li");
const listItem = document.querySelector("li");
const heading = document.querySelector("#heading");
const listParent = document.querySelector(".list-parent");
const greenItems = document.querySelectorAll(".green");

const listItems = document.querySelectorAll("li:nth-child(even)");

// console.log(list);
// console.log(listItem);
// console.log(heading);
// console.log(listParent);
// console.log(greenItems);

console.log(listItems);
console.log(listItems.length);

//

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "lightgreen";
}