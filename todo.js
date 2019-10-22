//alert("Connected");

// Create Text Node
/*
var h = document.createElement("h1");
var myvalue = document.createTextNode("This is H1 Tag Value");
h.appendChild(myvalue);

document.querySelector('h1').appendChild(h);
 */

var ul = document.getElementById('list');
//var li;

var addButton = document.getElementById('add').addEventListener('click', addItem);
var removeButton = document.getElementById('remove').addEventListener('click', removeItem);
var removeallButton = document.getElementById('removeall').addEventListener('click', removeallItem);

function addItem() {
    console.log("Add Button Clicked with value");
    var input = document.getElementById("input",);
    console.log(`Input is - ${input.value}`);
    var item = input.value
    var ul = document.getElementById('list');
    text_node = document.createTextNode(item);

    if (item === ''){
        //p = document.createElement('p');
        //p.textContent = "Please Enter your Task";
        alert("Please Enter your Task");
        //return false
    } else {
        li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check')

        var label = document.createElement('label');

        ul.appendChild(label);
        li.appendChild(checkbox);
        li.appendChild(label);
        label.appendChild(text_node);
        ul.insertBefore(li, ul.childNodes[0]);

        setTimeout(()=>{
            li.className = 'visual';
        },10);

        input.value = ''

    }
}

function removeallItem() {
    console.log("Remove all Clicked");
    li = ul.children;
    console.log(li, li.length);
    for (let index=0; index<=li.length; index++) {
        const element = li[index];
        console.log(`Removing element - ${element}`);
        ul.removeChild(element);
    }

}

function removeItem() {
    console.log("Remove Button Clicked with value");
    li = ul.children;
    console.log(li);
    for (let index=0; index<li.length; index++){
        const element = li[index];
        console.log(element);
        while (li[index] && li[index].children[0].checked){
            console.log("Removing...");
            ul.removeChild(li[index])
        }
    }
}