// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

document.addEventListener('DOMContentLoaded', function () {
    var addList = document.getElementById('addList');
    // onClick's logic below:
    addList.addEventListener('click', newElement);
});

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    if (typeof (Storage) !== "undefined") {

        if (localStorage.getItem('tasks') == null) {
            localStorage.setItem('tasks', JSON.stringify([inputValue]));
        } else {
            var tasks = JSON.parse(localStorage.getItem("tasks"));
            tasks.push(inputValue);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

    } else {
        alert("Sorry, your browser does not support web storage...");
    }

    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
};

// checks if the browser supports Web Storage
if (typeof (Storage) !== "undefined") {
    showSavedList();
} else {
    alert("Sorry, your browser does not support web storage...");
}

// show the tasks currently saved in the list
function showSavedList() {
    // using the local storage
    var storage = localStorage;

    var tasks = JSON.parse(localStorage.getItem("tasks"))

    // loop through the JSON object in the storage and add them to the list
    for (var key in tasks) {
        var value = tasks[key];
        
        // appends to the rest of the list
        var li = document.createElement("li");
        var t = document.createTextNode(value);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);
        document.getElementById("myInput").value = "";
        var span = document.createElement("SPAN");
        // creates the x sign
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        // adds to the list
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }
}