const input = document.getElementById('input');
const button = document.getElementById('submit');
let list = document.getElementsByTagName('ul')[0];

const showhidebtn = document.getElementById('showhide-btn');

button.addEventListener('click', () => {
    let listItem = document.createElement('li');
    listItem.textContent = input.value;
    list.appendChild(listItem);
    // clears the input section at the end so it doesn't remain
    input.value = '';
})

//challenge cont'd
//show/hide list
//in console, type list.style to find object properties
//then use list.style.display, it will show 'block' so you can show none
showhidebtn.addEventListener("click", () => {
    let list = document.getElementsByTagName('ul')[0];
    if(list.style.display == 'none') {
        list.style.display = 'block';
        showhidebtn.textContent = 'hide';
    } else {
        list.style.display = 'none';
        showhidebtn.textContent = 'show';
    }
})
//inspect the html you can then see inline style as display:"none" added in when button clicked
