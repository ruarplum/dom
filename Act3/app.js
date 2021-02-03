// Change first list item to red 
const list = document.getElementsByTagName("li");

console.log(list);

list.length;
list[0];
list[3];
list[0].style.color="red";

// For loop to turn all li items orange 

for (let i = 0; i < list.length; i++) {
    list[i].style.color = "orange"
}
console.log(list);

// Now turn those with the class of "not-orange" to red

const notOrange = document.getElementsByClassName("not-orange");

for (let i = 0; i < notOrange.length; i++) {
    notOrange[i].style.color = "red";
}

// The order in which this happens impacts the final result (if the loop to make
// all orange comes last then all will end up orange)