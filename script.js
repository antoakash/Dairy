// selecting popup box, popup overlay, and button
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// selecting cancel button
var cancelpopup = document.getElementById("cancel-popup");
cancelpopup.addEventListener("click", function(event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// select container, addbook, notetitleinput, noteauthorinput, notedescriptioninput
var container = document.querySelector(".container");
var addnote = document.getElementById("add-note");
var dateinput = document.getElementById("date-input");
var titleinput = document.getElementById("title-input");
var descriptioninput = document.getElementById("description-input");

addnote.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "diary-container");
    div.innerHTML = `
        <h2>${dateinput.value}</h2>
        <h5>${titleinput.value}</h5>
        <p>${descriptioninput.value}</p>
        <button onclick="deletediary(event)">Delete</button>
    `;
    container.append(div);
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

function deletediary(event) {
    if (confirm("Are you sure you want to delete this item? This action cannot be undone.")) {
        // Proceed with delete action
        event.target.parentElement.remove();
        alert("Item deleted successfully.");
    } else {
        // Cancel delete action
        alert("Delete action cancelled.");
    }
    
}
